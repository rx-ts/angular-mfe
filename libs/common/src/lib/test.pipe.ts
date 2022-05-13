import { Pipe, PipeTransform } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  constructor(public http: HttpClient) {}

  transform(value: unknown) {
    return `test: ${value}`
  }
}
