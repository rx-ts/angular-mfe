/**
 * @packageDocumentation
 * @module translate
 */

import { Arrayable } from '../types';

export interface Translation {
  [key: string]: Arrayable<string | number | boolean | Translation>;
}

export type Translations<T extends string = string> = Partial<
  Record<T, Translation>
>;

export type TranslateKey<T extends string = string> =
  | string
  | Partial<Record<T, string>>;

export interface TranslateOptions<T extends string = string> {
  locale?: T;
  defaultLocale?: T;
  locales?: T[];
  translations?: Translations<T>;
  loose?: boolean;
  remoteTranslations?: Translations<T>;
  remoteUrl?: string | string[];
}
