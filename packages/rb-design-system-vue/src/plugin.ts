import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'rb-design-system/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
