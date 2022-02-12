import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-stencil-advanced',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: ''
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    }
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ]
  // bundles
};
