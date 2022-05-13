import { Injectable, Type } from '@angular/core'
import { loadRemoteModule, setRemoteDefinitions } from '@nrwl/angular/mfe'
import { map, of, shareReplay, switchMap, tap } from 'rxjs'

export interface RemoteWidget {
  descriptor: string
  component: Type<unknown>
}

export interface RemoteModuleDef {
  module: Type<unknown>
  widgets: RemoteWidget[]
}

@Injectable({
  providedIn: 'root',
})
export class RemoteService {
  remoteModule$ = of<Record<string, string>>({
    remote: 'http://localhost:4201/',
  }).pipe(
    tap(setRemoteDefinitions),
    switchMap(() => loadRemoteModule('remote', './RemoteEntry')),
    map(
      (remoteModule: Record<string, unknown>) =>
        ({
          module: remoteModule[remoteModule['REMOTE_MODULE'] as string],
          widgets: remoteModule['REMOTE_WIDGETS'],
        } as RemoteModuleDef),
    ),
    shareReplay(1),
  )
}
