import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '@mfe/shared'
import { TestModule, TranslateModule } from '@mfe/common'

import { HelloComponent } from './component'

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
