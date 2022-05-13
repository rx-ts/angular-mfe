import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core'
import { isEqual } from 'lodash-es'
import { Subject, Subscription, merge } from 'rxjs'
import { filter, takeUntil } from 'rxjs/operators'

import { TranslateService } from './translate.service'
import { TranslateKey } from './types'

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe<T extends string>
  implements PipeTransform, OnDestroy
{
  private value?: string
  private lastKey?: TranslateKey<T> | null
  private lastData?: unknown
  private lastRemoteLoaded? = this.translate.remoteLoaded
  private onChange: Subscription | null = null

  private readonly destroy$$ = new Subject<void>()

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly translate: TranslateService,
  ) {
    this.translate.remoteLoaded$
      .pipe(
        filter(_ => !!_),
        takeUntil(this.destroy$$),
      )
      .subscribe(() => this.cdr.markForCheck())
  }

  transform(key: TranslateKey<T>, data?: unknown, ignoreNonExist = false) {
    const { remoteLoaded, locale$, defaultLocale$ } = this.translate
    const isLoading = remoteLoaded === false
    if (
      isEqual(key, this.lastKey) &&
      isEqual(data, this.lastData) &&
      (isEqual(remoteLoaded, this.lastRemoteLoaded) || !remoteLoaded)
    ) {
      return this.value
    }

    this.lastData = data
    this.lastRemoteLoaded = remoteLoaded
    this.updateValue(key, data, ignoreNonExist, isLoading)
    this.dispose()

    this.onChange = merge(locale$, defaultLocale$)
      .pipe(takeUntil(this.destroy$$))
      .subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null
          this.updateValue(key, data, ignoreNonExist, isLoading)
        }
      })

    return this.value
  }

  private updateValue(
    key: TranslateKey<T>,
    data?: unknown,
    ignoreNonExist = false,
    isLoading = false,
  ) {
    const value = this.translate.get(key, data, ignoreNonExist || isLoading)
    // avoid text slashing on remote loading
    if (!isLoading || key !== value) {
      this.value = value
      this.lastKey = key
      this.cdr.markForCheck()
    }
  }

  private dispose() {
    if (this.onChange) {
      this.onChange.unsubscribe()
      this.onChange = null
    }
  }

  /** @ignore */
  ngOnDestroy() {
    this.destroy$$.next()
    this.destroy$$.complete()
  }
}
