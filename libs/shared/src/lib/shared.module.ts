import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RemoteComponent } from './remote'
import { TestModule, TranslateModule } from '@mfe/common'

@NgModule({
  imports: [CommonModule, TestModule, TranslateModule],
  declarations: [RemoteComponent],
  exports: [RemoteComponent],
})
export class SharedModule {}
