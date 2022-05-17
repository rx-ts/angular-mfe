import { Injectable, isDevMode, Type } from '@angular/core'
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

// strangely it can not be inlined...
const remoteURL = `${location.href.slice(
  0,
  location.href.search(/\/main($|(\/))/),
)}/remote/`

@Injectable({
  providedIn: 'root',
})
export class RemoteService {
  remoteModule$ = of<Record<string, string>>({
    remote: isDevMode() ? 'http://localhost:4201/' : remoteURL,
  }).pipe(
    tap(setRemoteDefinitions),
    switchMap(
      () =>
        loadRemoteModule('remote', './RemoteEntry') as Promise<
          Record<string, unknown>
        >,
    ),
    map(
      remoteModule =>
        ({
          module: remoteModule[remoteModule.REMOTE_MODULE as string],
          widgets: remoteModule.REMOTE_WIDGETS,
        } as RemoteModuleDef),
    ),
    shareReplay(1),
  )
}
