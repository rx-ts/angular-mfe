import { Pipe, PipeTransform } from '@angular/core'
import { last } from 'lodash-es'

import { IfEqual } from '../types'

export type First<T extends unknown[]> = T extends [infer R, ...unknown[]]
  ? R
  : never

export type OmitFirst<T extends unknown[]> = T extends [unknown, ...infer R]
  ? R
  : []

@Pipe({
  name: 'pure',
})
export class PurePipe implements PipeTransform {
  /**
   * ! Notice: function overload is not supported for `mapper`,
   * you may have to use `$any` to workaround in template.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform<T extends (...args: any[]) => any>(
    value: First<Parameters<T>>,
    mapper: T,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: IfEqual<T, any, unknown[], OmitFirst<Parameters<T>>>
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return mapper.call(last(args), value, ...args) as ReturnType<T>
  }
}
