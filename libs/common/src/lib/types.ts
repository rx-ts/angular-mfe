import { Observable } from "rxjs"

export type IfEqual<X, Y, A = X, B = never> = (<T>() => T extends X
  ? true
  : false) extends <T>() => T extends Y ? true : false
  ? A
  : B

export type ObservableType<T> = T extends Observable<infer R> ? R : never
