import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  templateUrl: 'template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {}
