import { ValueOf } from '../types';

export const DEFAULT_REMOTE_URL = 'custom/i18n.{locale}.yaml';

export const LOCALE_STORAGE = '__LOCALE__';

export const LOCALE_PLACEHOLDER_REGEX = /{+\s*locale\s*}+/;

export const Locale = {
  ZH: 'zh',
  EN: 'en',
} as const;

export type Locale = ValueOf<typeof Locale>;
