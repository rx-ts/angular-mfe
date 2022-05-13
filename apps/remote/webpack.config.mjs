import { withModuleFederation } from '@nrwl/angular/module-federation'
import webpack from 'webpack'

import mfeConfig from './mfe.config.mjs'

export default async webpackConfig => {
  const mfeFederation = await withModuleFederation({
    ...mfeConfig,
  })

  const mergedConfig = mfeFederation(webpackConfig)

  mergedConfig.plugins = mergedConfig.plugins.filter(
    p => !(p instanceof webpack.NormalModuleReplacementPlugin),
  )

  return mergedConfig
}
