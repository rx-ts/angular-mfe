import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { TestModule, TranslateModule } from '@mfe/common'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
