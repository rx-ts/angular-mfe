import { BehaviorSubject } from 'rxjs'

import { ObservableType } from '../types'

const checkDescriptor = <T, K extends keyof T>(target: T, propertyKey: K) => {
  const oDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey)

  if (oDescriptor && !oDescriptor.configurable) {
    throw new TypeError(`property ${String(propertyKey)} is not configurable`)
  }

  return {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    oGetter: oDescriptor?.get as (() => T[K]) | undefined,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    oSetter: oDescriptor?.set as ((value: T[K]) => void) | undefined,
    oDescriptor,
  }
}

const strictCheckDescriptor = <T, K extends keyof T>(
  target: T,
  propertyKey: K,
) => {
  const { oGetter, oSetter, oDescriptor } = checkDescriptor(target, propertyKey)

  if (oGetter || oSetter) {
    throw new TypeError(
      `property ${String(propertyKey)} should not define getter or setter`,
    )
  }

  return oDescriptor
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ValueHook<T = any, K extends keyof T = any>(
  setter?: (this: T, value?: T[K]) => boolean | void,
  getter?: (this: T, value?: T[K]) => T[K],
  afterSetter?: (this: T, value?: T[K]) => void,
) {
  return (target: T, propertyKey: K, _parameterIndex?: number) => {
    const { oGetter, oSetter } = checkDescriptor(target, propertyKey)

    const symbol = Symbol(propertyKey as string)

    type Mixed = T & {
      [symbol]: T[K]
    }

    Object.defineProperty(target, propertyKey, {
      enumerable: true,
      configurable: true,
      get(this: Mixed) {
        return getter
          ? getter.call(this, this[symbol])
          : oGetter
          ? oGetter.call(this)
          : this[symbol]
      },
      set(this: Mixed, value: T[K]) {
        if (
          value === this[propertyKey] ||
          setter?.call(this, value) === false
        ) {
          return
        }
        if (oSetter) {
          oSetter.call(this, value)
        }
        this[symbol] = value
        afterSetter?.call(this, value)
      },
    })
  }
}

export function ObservableInput<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T = any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OK extends keyof T = any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  K extends keyof T = any,
>(propertyKey: K | boolean = true, initialValue?: ObservableType<T[OK]>) {
  return (target: T, oPropertyKey: OK) => {
    if (!(oPropertyKey as string).endsWith('$')) {
      throw new TypeError(
        `property ${
          oPropertyKey as string
        } should be an Observable and its name should end with $`,
      )
    }

    strictCheckDescriptor(target, oPropertyKey)

    const symbol = Symbol(oPropertyKey as string)

    type OT = ObservableType<T[OK]>

    type Mixed = Record<OK, BehaviorSubject<OT>> &
      T & {
        [symbol]?: BehaviorSubject<OT>
      }

    // eslint-disable-next-line prefer-const
    let oPropertyValue: OT

    Object.defineProperty(target, oPropertyKey, {
      enumerable: true,
      configurable: true,
      get(this: Mixed) {
        return (
          this[symbol] ||
          (this[symbol] = new BehaviorSubject(
            // when no initialValue passed in, use the original property val
            initialValue === undefined ? oPropertyValue : initialValue,
          ))
        )
      },
      set(this: Mixed, value: OT) {
        this[oPropertyKey].next(value)
      },
    })

    if (!propertyKey) {
      return
    }

    if (propertyKey === true) {
      propertyKey = (oPropertyKey as string).replace(/\$+$/, '') as K
    }

    const oDescriptor = strictCheckDescriptor(target, propertyKey)
    oPropertyValue = // type-coverage:ignore-next-line
      (oDescriptor ? oDescriptor.value : target[propertyKey]) as OT

    Object.defineProperty(target, propertyKey, {
      enumerable: true,
      configurable: true,
      get(this: Mixed) {
        return this[oPropertyKey].getValue()
      },
      set(this: Mixed, value: OT) {
        this[oPropertyKey].next(value)
      },
    })
  }
}
