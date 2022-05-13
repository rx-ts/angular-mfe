import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@mfe/shared'
import { PasswordInputComponent } from './widgets'
import { TestModule, TranslateModule } from '@mfe/common'

@NgModule({
  imports: [CommonModule, SharedModule, TestModule, TranslateModule],
  declarations: [PasswordInputComponent],
  exports: [PasswordInputComponent],
})
export class RemoteModule {}
