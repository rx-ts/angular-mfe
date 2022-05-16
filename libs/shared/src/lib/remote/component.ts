import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  ɵcreateInjector as createInjector,
} from '@angular/core'
import { combineLatest, map, Observable, shareReplay } from 'rxjs'

import { RemoteService } from './service'

import { ObservableInput } from '@mfe/common'

@Component({
  selector: 'mfe-remote',
  templateUrl: 'template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteComponent {
  @Input()
  descriptor!: string

  @ObservableInput()
  descriptor$!: Observable<string>

  remoteModule$ = this.remote.remoteModule$

  remoteWidget$ = combineLatest([this.descriptor$, this.remoteModule$]).pipe(
    map(([descriptor, remoteModule]) => {
      const remoteWidget = remoteModule.widgets.find(
        widget => widget.descriptor === descriptor,
      )
      return (
        remoteWidget && {
          ...remoteWidget,
          injector: createInjector(remoteModule.module, this.injector),
        }
      )
    }),
    shareReplay(1),
  )

  constructor(
    private readonly injector: Injector,
    private readonly remote: RemoteService,
  ) {}
}
