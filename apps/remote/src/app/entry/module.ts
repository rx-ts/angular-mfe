import { NgModule } from '@angular/core'
import { CommonModule as _CommonModule } from '@angular/common'

import { CommonModule } from '@mfe/common'
import { SharedModule } from '@mfe/shared'
import { PasswordInputComponent } from './widgets'

@NgModule({
  imports: [_CommonModule, CommonModule, SharedModule],
  declarations: [PasswordInputComponent],
  exports: [PasswordInputComponent],
})
export class RemoteModule {}
