import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'mfe-test',
  templateUrl: 'template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}
