import { Observable } from 'rxjs'

export type Readonlyable<T> = T | Readonly<T>

export type AnyArray<T> = Readonlyable<T[]>

export type Arrayable<T, R extends boolean = false> = [R] extends [never]
  ? T | T[]
  : R extends true
  ? Readonly<T> | readonly T[]
  : R extends false
  ? Readonlyable<T> | AnyArray<T>
  : never

export type IfEqual<X, Y, A = X, B = never> = (<T>() => T extends X
  ? true
  : false) extends <T>() => T extends Y ? true : false
  ? A
  : B

export type ObservableType<T> = T extends Observable<infer R> ? R : never

export type ValueOf<T> = T[keyof T]
