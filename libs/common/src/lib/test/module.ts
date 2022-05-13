import { ModuleWithProviders, NgModule } from '@angular/core'
import { TranslateModule } from '../translate'
import { TestComponent } from './component'

import { TestPipe } from './test.pipe'
import { TOKEN_PREFIX } from './tokens'

const EXPORTABLES = [TestPipe, TestComponent]

@NgModule({
  imports: [TranslateModule],
  declarations: EXPORTABLES,
  exports: EXPORTABLES,
})
export class TestModule {
  static forRoot(prefix?: string): ModuleWithProviders<TestModule> {
    return {
      ngModule: TestModule,
      providers: [
        {
          provide: TOKEN_PREFIX,
          useValue: prefix,
          multi: true,
        },
      ],
    }
  }
}
