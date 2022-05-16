import { HttpClient } from '@angular/common/http'
import {
  Inject,
  Injectable,
  OnDestroy,
  isDevMode,
  Injector,
} from '@angular/core'
import { load } from 'js-yaml'
import { get, head, isPlainObject, template } from 'lodash-es'
import {
  EMPTY,
  Observable,
  Subject,
  forkJoin,
  throwError,
  catchError,
  filter,
  finalize,
  map,
  takeUntil,
} from 'rxjs'
import { ajax } from 'rxjs/ajax'

import {
  API_GATEWAY,
  ObservableInput,
  TEMPLATE_OPTIONS,
  TOKEN_BASE_HREF,
  isAbsoluteUrl,
} from '../utils'

import { LOCALE_PLACEHOLDER_REGEX, LOCALE_STORAGE, Locale } from './constants'
import {
  TOKEN_DEFAULT_LOCALE,
  TOKEN_LOCALE,
  TOKEN_LOCALES,
  TOKEN_LOOSE,
  TOKEN_REMOTE_TRANSLATIONS,
  TOKEN_REMOTE_URL,
  TOKEN_TRANSLATIONS,
} from './tokens'
import { TranslateKey, Translation, Translations } from './types'

@Injectable({ providedIn: 'root' })
export class TranslateService<L extends string = Locale> implements OnDestroy {
  @ObservableInput()
  readonly locale$!: Observable<L>

  @ObservableInput()
  readonly defaultLocale$!: Observable<L>

  private _remoteLoaded?: boolean
  get remoteLoaded() {
    return this._remoteLoaded
  }

  @ObservableInput('_remoteLoaded')
  readonly remoteLoaded$!: Observable<boolean | undefined>

  private readonly destroy$$ = new Subject<void>()

  constructor(
    @Inject(TOKEN_LOCALES)
    private readonly locales: L[],
    @Inject(TOKEN_LOCALE)
    public locale: L,
    @Inject(TOKEN_DEFAULT_LOCALE)
    public defaultLocale: L,
    @Inject(TOKEN_TRANSLATIONS)
    private readonly translationsList: Array<Readonly<Translations<L>>>,
    @Inject(TOKEN_LOOSE)
    private readonly loose: boolean,
    @Inject(TOKEN_BASE_HREF)
    private readonly baseHref: string,
    @Inject(TOKEN_REMOTE_TRANSLATIONS)
    private readonly remoteTranslationsList: Array<Readonly<Translations<L>>>,
    @Inject(TOKEN_REMOTE_URL)
    private readonly remoteUrl: string[] | string,
    private readonly injector: Injector,
  ) {
    this.translationsList = translationsList.filter(Boolean)

    this._watchLocale()

    if (this.remoteUrl) {
      if (Array.isArray(this.remoteUrl)) {
        for (const url of this.remoteUrl) this.addRemoteTranslations(url)
      } else {
        this.addRemoteTranslations(this.remoteUrl)
      }
    }

    this._compareTranslationKeys()
  }

  /** @ignore */
  ngOnDestroy() {
    this.destroy$$.next()
    this.destroy$$.complete()
  }

  /**
   * @param key - 翻译key
   * @param data - 根据翻译上下文数据获取翻译内容，翻译项不存在直接返回 key 文本
   * @param ignoreNonExist - 开发环境是否忽视不存在的翻译项
   */
  get(key: TranslateKey<L>, data?: unknown, ignoreNonExist = false) {
    const translation = this.getRaw(key, ignoreNonExist)!
    if (data != null && typeof data !== 'object') {
      data = [data]
    }
    return template(translation, TEMPLATE_OPTIONS)(data as object)
  }

  /**
   * 直接返回翻译文本模板
   * @param key - 翻译key
   * @param ignoreNonExist - 开发环境是否忽视不存在的翻译项
   */
  getRaw(key: TranslateKey<L>, ignoreNonExist = false) {
    return typeof key === 'string'
      ? this._get(key, ignoreNonExist)
      : this._getValue(key)
  }

  /**
   * 根据 `locales` 循环切换当前区域设置
   */
  toggleLocale() {
    const index = this.locales.indexOf(this.locale)
    if (index === -1) {
      if (isDevMode()) {
        throw new TypeError('`locales` has not been initialized correctly')
      }
      return
    }
    const nextLocale =
      this.locales[index === this.locales.length - 1 ? 0 : index + 1]

    if (!nextLocale || this.locale === nextLocale) {
      return
    }

    this.locale = nextLocale
  }

  /**
   * 手动添加语言包
   */
  addTranslations(translations: Translations<L>) {
    this.translationsList.unshift(Object.freeze(translations))
  }

  /**
   * 手动添加语言包
   */
  // eslint-disable-next-line sonarjs/cognitive-complexity
  addRemoteTranslations(remoteUrl: string) {
    if (!remoteUrl) {
      return
    }
    this._remoteLoaded = false
    remoteUrl = head(remoteUrl.split(/#/))!
    const isAbsolute = isAbsoluteUrl(remoteUrl)
    const isApiGateWayRequest = remoteUrl.startsWith(API_GATEWAY)
    if (isDevMode()) {
      let errorMessage: string | undefined
      if (!isAbsolute && (!this.baseHref || !isAbsoluteUrl(this.baseHref))) {
        errorMessage = 'absolute base href is required for relative remote url'
      } else if (remoteUrl.split('?')[0].includes('./')) {
        errorMessage =
          'do not use any dot with slash for relative url which should always base from base href'
      }
      if (errorMessage) {
        throw new TypeError(errorMessage)
      }
    }
    if (!isAbsolute && !isApiGateWayRequest) {
      remoteUrl =
        (this.baseHref.endsWith('/') ? this.baseHref : this.baseHref + '/') +
        remoteUrl
    }
    ;(LOCALE_PLACEHOLDER_REGEX.test(remoteUrl)
      ? forkJoin(
          this.locales.map(locale =>
            this.fetchTranslation(remoteUrl, locale).pipe(
              catchError((error: unknown) => {
                if (this.loose) {
                  const looseLocale = this._getLooseLocale(locale)
                  if (
                    locale !== looseLocale &&
                    !this.locales.includes(looseLocale)
                  ) {
                    return this.fetchTranslation(remoteUrl, looseLocale)
                  }
                }
                return isDevMode() ? throwError(() => error) : EMPTY
              }),
              filter(isPlainObject),
              map(
                (translation: Translation) =>
                  ({
                    [locale]: translation,
                  } as Translations<L>),
              ),
            ),
          ),
        ).pipe(map(_ => _.reduce(Object.assign)))
      : this.fetchTranslation(remoteUrl).pipe(
          catchError((error: unknown) =>
            isDevMode() ? throwError(() => error) : EMPTY,
          ),
        )
    )
      .pipe(
        takeUntil(this.destroy$$),
        finalize(() => (this._remoteLoaded = true)),
      )
      .subscribe(remoteTranslations => {
        if (!remoteTranslations) {
          return
        }
        this.remoteTranslationsList.unshift(Object.freeze(remoteTranslations))
      })
  }

  /**
   * 从远程 url 模板和区域获取翻译包
   */
  fetchTranslation(remoteUrl: string): Observable<Translations<L> | undefined>
  fetchTranslation(
    remoteUrl: string,
    locale: string,
  ): Observable<Translation | undefined>

  fetchTranslation(remoteUrl: string, locale?: string) {
    if (isDevMode() && LOCALE_PLACEHOLDER_REGEX.test(remoteUrl) && !locale) {
      throw new TypeError(
        '`locale` is required sine the provided remote url contains locale placeholder',
      )
    }
    const isJSON = remoteUrl.endsWith('.json')
    const isApiGateWayRequest = remoteUrl.startsWith(API_GATEWAY)
    const url = locale
      ? remoteUrl.replace(LOCALE_PLACEHOLDER_REGEX, locale)
      : remoteUrl
    const responseType = isJSON ? 'json' : 'text'
    if (isApiGateWayRequest) {
      return this.injector
        .get(HttpClient)
        .request('GET', url, { responseType })
        .pipe(map((body: unknown) => (isJSON ? body : load(body as string))))
    }
    return ajax({
      url,
      responseType,
    }).pipe(
      map(({ response }) => (isJSON ? response : load(response as string))),
    )
  }

  private _watchLocale() {
    this.locale$
      .pipe(takeUntil(this.destroy$$))
      .subscribe(locale => localStorage.setItem(LOCALE_STORAGE, locale))
  }

  private _getLooseLocale(locale: string) {
    return head(locale.split(/[_-]/)) as L
  }

  private _getValue<T>(
    source?: Partial<Record<L, T>>,
    locale = this.locale,
  ): T | void {
    if (!source) {
      return
    }
    let value = source[locale]
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (value == null && this.loose) {
      const looseLocale = this._getLooseLocale(locale)
      value =
        locale === looseLocale
          ? (Object.entries(source as T).find(
              ([key]) => locale === this._getLooseLocale(key),
            )?.[1] as Partial<Record<L, T>>[L])
          : source[looseLocale]
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (value == null && locale !== this.defaultLocale) {
      return this._getValue(source, this.defaultLocale)
    }
    return value
  }

  private _getWithFallback(
    key: string,
    locale = this.locale,
    translations: Translations<L>,
  ): string | undefined | void {
    const value = get(this._getValue(translations, locale), key) as unknown
    if (value != null) {
      if (
        typeof value === 'object' &&
        isDevMode() &&
        typeof get(value, Symbol.toPrimitive) !== 'function'
      ) {
        console.warn(
          `The translation for locale: \`${locale}\` and key:\`${key}\` is an object, which could be unexpected`,
        )
      }
      return String(value)
    }
    if (locale !== this.defaultLocale) {
      return this._getWithFallback(key, this.defaultLocale, translations)
    }
  }

  private _getBase(
    key: string,
    locale = this.locale,
    translationsList?: Array<Translations<L>>,
  ): string | undefined | void {
    if (!translationsList || translationsList.length === 0) {
      return
    }
    for (let i = translationsList.length; i > 0; i--) {
      const value = this._getWithFallback(key, locale, translationsList[i - 1])
      if (value != null) {
        return value
      }
    }
  }

  private _get(key: string, ignoreNonExist = false, locale = this.locale) {
    let value = this._getBase(key, locale, this.remoteTranslationsList)
    if (value == null) {
      value = this._getBase(key, locale, this.translationsList)
    }
    if (value != null) {
      return value
    }
    if (
      isDevMode() &&
      !ignoreNonExist &&
      typeof get(value, Symbol.toPrimitive) !== 'function'
    ) {
      console.warn(
        `No translation found for locale: \`${locale}\` and key:\`${key}\`, which could be unexpected`,
      )
    }
    return key
  }

  private _compareTranslationKeys() {
    if (!isDevMode() || this.translationsList.length < 2) {
      return
    }

    for (let i = this.translationsList.length - 1; i > 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        for (const locale of Object.keys(this.translationsList[i]) as L[]) {
          this._compareKeys(
            locale,
            this.translationsList[i][locale],
            this.translationsList[j][locale],
          )
        }
      }
    }
  }

  private _compareKeys(
    locale: L,
    translation?: Translation,
    prevTranslation?: Translation,
    path: string[] = [],
  ) {
    if (translation == null || prevTranslation == null) {
      return
    }

    for (const [key, value] of Object.entries(translation)) {
      // type-coverage:ignore-next-line
      if (!Object.prototype.hasOwnProperty.call(prevTranslation, key)) {
        continue
      }

      const prevValue = prevTranslation[key]
      const valueIsPlainObject = isPlainObject(value)
      const prevValueIsPlainObject = isPlainObject(prevValue)

      if (valueIsPlainObject && prevValueIsPlainObject) {
        this._compareKeys(
          locale,
          value as Translation,
          prevValue as Translation,
          [...path, key],
        )
        continue
      }

      if (!valueIsPlainObject && !prevValueIsPlainObject) {
        const outputPath = [...path, key].join(' -> ')
        if (value === prevValue) {
          console.warn(
            `The customized translation for locale: \`${locale}\` and path: \`${outputPath}\` is duplicated with the other translation, please remove it in your translation file.`,
          )
        } else {
          console.warn(
            `Two keys that the locale is \`${locale}\` and the path is \`${outputPath}\` are same,  but their values are not equal , please remove one of them or change one of the keys.`,
          )
        }
      }
    }
  }
}
