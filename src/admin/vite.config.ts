import type { UserConfig } from 'vite';

const KEEP_PREBUNDLED = ['@_sh/strapi-plugin-ckeditor', '@ckeditor/ckeditor5-react', 'ckeditor5'];

export default (config: UserConfig) => {
  config.optimizeDeps = config.optimizeDeps ?? {};
  config.optimizeDeps.exclude = (config.optimizeDeps.exclude ?? []).filter(
    (dep) => !KEEP_PREBUNDLED.includes(dep)
  );

  config.resolve = config.resolve ?? {};
  config.resolve.dedupe = [...(config.resolve.dedupe ?? []), 'ckeditor5', '@ckeditor/ckeditor5-core', '@ckeditor/ckeditor5-ui', '@ckeditor/ckeditor5-engine'];

  return config;
};
