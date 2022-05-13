import { ModuleWithProviders, NgModule } from '@angular/core'

import { TestPipe } from './test.pipe'
import { TOKEN_PREFIX } from './tokens'

const EXPORTABLES = [TestPipe]

@NgModule({
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
