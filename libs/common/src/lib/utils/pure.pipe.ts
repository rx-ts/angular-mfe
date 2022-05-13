/**
 * @packageDocumentation
 * @module utils
 */

import { Pipe, PipeTransform } from '@angular/core'

import { IfEqual } from './types'

export type OmitFirst<T extends unknown[]> = T extends [unknown, ...infer R]
  ? R
  : []

const last = <T>(values: T[]) => values?.[values.length - 1]

@Pipe({
  name: 'pure',
})
export class PurePipe implements PipeTransform {
  /**
   * ! Notice: function overload is not supported for `mapper`,
   * you may have to use `$any` to workaround in template.
   */
  transform<T extends (...args: any[]) => any>(
    value: Parameters<T>[0],
    mapper: T,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: IfEqual<T, any, unknown[], OmitFirst<Parameters<T>>>
  ) {
    return mapper.call(last(args), value, ...args) as ReturnType<T>
  }
}
