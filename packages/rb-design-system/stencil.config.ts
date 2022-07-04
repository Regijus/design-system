import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'rb-design-system',
  globalStyle: 'src/globals/styles.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
		vueOutputTarget({
      componentCorePackage: 'rb-design-system',
      proxiesFile: '../rb-design-system-vue/src/components.ts',
		}),
  ],
	plugins: [
		sass({
			injectGlobalPaths: [
				'src/globals/variables.scss',
			],
		}),
	],
};
