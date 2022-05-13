export default {
  remotes: ['remote'],
  shared: (libraryName, configs) =>
    ([
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
    ].includes(libraryName) && {
      singleton: true,
      requiredVersion: configs.requiredVersion,
    }) ||
    (['@mfe/common', '@mfe/shared'].includes(libraryName) && {
      singleton: true,
      strictVersion: true,
      requiredVersion: '0.0.0',
    }),
}
