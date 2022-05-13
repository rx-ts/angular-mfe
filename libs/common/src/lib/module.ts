import { NgModule } from '@angular/core'
import { CommonModule as _CommonModule } from '@angular/common'

import { UtilsModule } from './utils'
import { TestModule } from './test'

const EXPORTABLES = [TestModule, UtilsModule]

@NgModule({
  imports: [_CommonModule, ...EXPORTABLES],
  exports: EXPORTABLES,
})
export class CommonModule {}
