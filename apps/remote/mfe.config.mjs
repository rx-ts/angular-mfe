import BASE_MFE_CONFIG from './base.mfe.config.mjs';

export default {
  ...BASE_MFE_CONFIG,
  name: 'remote',
  exposes: {
    './RemoteEntry':
      'apps/remote/src/app/entry',
  },
};
