import type { TemplateOptions } from 'lodash'

export const API_GATEWAY = '{{API_GATEWAY}}'

export const TEMPLATE_OPTIONS: TemplateOptions = Object.freeze({
  interpolate: /{{([\S\s]+?)}}/g,
})
