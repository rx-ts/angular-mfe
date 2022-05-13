import { Pipe, PipeTransform } from '@angular/core'
import { TestService } from './test.service'

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  constructor(public test: TestService) {}

  transform(value: unknown) {
    const prefix = this.test.getPrefix()
    return `${prefix ? prefix + ': ' : ''}${value}`
  }
}
