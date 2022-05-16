import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HelloComponent } from './component'

import { TestModule, TranslateModule } from '@mfe/common'
import { SharedModule } from '@mfe/shared'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TestModule,
    TranslateModule,
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
