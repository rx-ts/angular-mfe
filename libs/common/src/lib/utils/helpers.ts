import { last } from 'lodash-es'

export const getBaseHref = () => {
  // The last base element has highest privilege
  const base = last(document.querySelectorAll('base'))
  // use `getAttribute` instead of `base.href` because the attribute could be void but results current whole location url
  return base?.getAttribute('href') || '/'
}

export const isAbsoluteUrl = (url: string) => /^(https?:\/)?\//.test(url)
