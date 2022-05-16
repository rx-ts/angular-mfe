import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'

import { TestModule, TranslateModule } from '@mfe/common'

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        TestModule.forRoot('prefix'),
      ],
      declarations: [AppComponent],
    }).compileComponents(),
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    // type-coverage:ignore-next-line
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')!.textContent).toContain(
      'Welcome to Angular MFE',
    )
  })
})
