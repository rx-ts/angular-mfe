import { NgModule } from '@angular/core'
import { CommonModule as _CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CommonModule } from '@mfe/common'

import { HelloComponent } from './component'
import { SharedModule } from '@mfe/shared'

@NgModule({
  imports: [
    _CommonModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HelloComponent,
      },
    ]),
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent],
})
export class HelloModule {}
