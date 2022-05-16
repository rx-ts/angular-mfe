import { Inject, Injectable } from '@angular/core'

import { TOKEN_PREFIX } from './tokens'

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(@Inject(TOKEN_PREFIX) private readonly prefixes: string[]) {}

  getPrefix() {
    return this.prefixes.filter(Boolean).join('-')
  }
}
