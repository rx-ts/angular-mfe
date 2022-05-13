import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { TestModule, TranslateModule } from '@mfe/common'

import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TestModule.forRoot('prefix'),
    TranslateModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./hello/module').then(M => M.HelloModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' },
    ),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
