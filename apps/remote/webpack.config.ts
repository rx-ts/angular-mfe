import type { BrowserBuilderOptions } from '@angular-devkit/build-angular'
import { withModuleFederation } from '@nrwl/angular/module-federation'
import { type Configuration, NormalModuleReplacementPlugin } from 'webpack'

import type { WithModuleFederationResult } from './base.mfe.config'
import mfeConfig from './mfe.config'

export default async (
  webpackConfig: Configuration,
  options: BrowserBuilderOptions,
) => {
  const mfeFederation = (await withModuleFederation({
    ...mfeConfig,
  })) as WithModuleFederationResult

  const mergedConfig = mfeFederation(webpackConfig)
  mergedConfig.plugins = mergedConfig.plugins!.filter(
    plugin => !(plugin instanceof NormalModuleReplacementPlugin),
  )
  mergedConfig.output!.publicPath = options.baseHref

  return mergedConfig
}
