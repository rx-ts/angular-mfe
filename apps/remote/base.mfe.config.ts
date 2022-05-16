import type { MFEConfig } from '@nrwl/angular/src/utils/mfe/with-module-federation'
import type { Configuration } from 'webpack'

export type WithModuleFederationResult = (
  config: Configuration,
) => Configuration

const mfeConfig: Omit<MFEConfig, 'name'> = {
  remotes: ['remote'],
  shared(libraryName, { requiredVersion }) {
    if (
      [
        '@angular/animations',
        '@angular/common',
        '@angular/common/http',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        'zone.js',
      ].includes(libraryName)
    ) {
      return {
        singleton: true,
        requiredVersion,
      }
    }

    if (['@mfe/common', '@mfe/shared'].includes(libraryName)) {
      return {
        singleton: true,
        strictVersion: true,
        requiredVersion: '0.0.0',
      }
    }

    return false
  },
}

export default mfeConfig
