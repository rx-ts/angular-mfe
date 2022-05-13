import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PurePipe } from './pure.pipe'

const EXPORTABLES = [PurePipe]

@NgModule({
  imports: [CommonModule],
  declarations: EXPORTABLES,
  exports: EXPORTABLES,
})
export class UtilsModule {}
