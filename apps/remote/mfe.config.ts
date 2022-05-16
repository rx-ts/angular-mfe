import { MFEConfig } from '@nrwl/angular/src/utils/mfe/with-module-federation'

import BASE_MFE_CONFIG from './base.mfe.config'

const mfeConfig: MFEConfig = {
  ...BASE_MFE_CONFIG,
  name: 'remote',
  exposes: {
    './RemoteEntry': 'apps/remote/src/app/entry',
  },
}

export default mfeConfig
