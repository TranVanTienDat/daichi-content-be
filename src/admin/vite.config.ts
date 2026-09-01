import type { UserConfig } from 'vite';

const KEEP_PREBUNDLED = ['@_sh/strapi-plugin-ckeditor', '@ckeditor/ckeditor5-react'];

export default (config: UserConfig) => {
  config.optimizeDeps = config.optimizeDeps ?? {};
  config.optimizeDeps.exclude = (config.optimizeDeps.exclude ?? []).filter(
    (dep) => !KEEP_PREBUNDLED.includes(dep)
  );

  return config;
};
