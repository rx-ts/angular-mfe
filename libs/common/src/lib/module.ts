import { NgModule } from '@angular/core'
import { CommonModule as _CommonModule } from '@angular/common'

import { TestPipe } from './test.pipe'
import { PurePipe } from './pure.pipe'

@NgModule({
  imports: [_CommonModule],
  declarations: [PurePipe, TestPipe],
  exports: [PurePipe, TestPipe],
})
export class CommonModule {}
