import { NgModule } from '@angular/core'
import { CommonModule as _CommonModule } from '@angular/common'

import { CommonModule } from '@mfe/common'

import { RemoteComponent } from './remote'

@NgModule({
  imports: [_CommonModule, CommonModule],
  declarations: [RemoteComponent],
  exports: [RemoteComponent],
})
export class SharedModule {}
