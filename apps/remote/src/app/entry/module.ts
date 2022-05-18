import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PasswordInputComponent } from './widgets'

import { TestModule, TranslateModule } from '@mfe/common'
import { SharedModule } from '@mfe/shared/shared.module'

@NgModule({
  imports: [CommonModule, SharedModule, TestModule, TranslateModule],
  declarations: [PasswordInputComponent],
  exports: [PasswordInputComponent],
})
export class RemoteModule {}
