import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
