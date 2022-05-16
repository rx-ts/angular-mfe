import { PasswordInputComponent } from './widgets'

import { RemoteWidget } from '@mfe/shared'

export const REMOTE_MODULE = 'RemoteModule'

export const REMOTE_WIDGETS: RemoteWidget[] = [
  {
    descriptor: 'password-input',
    component: PasswordInputComponent,
  },
]

export * from './module'
export * from './widgets'
