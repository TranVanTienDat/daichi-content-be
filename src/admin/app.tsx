import { defaultHtmlPreset, getPluginPresets } from '@_sh/strapi-plugin-ckeditor';
import InfoBox from './ckeditor/plugins/InfoBox';

export default {
  register() {
    const presets = getPluginPresets();
    const baseHtmlPreset = presets.defaultHtml ?? defaultHtmlPreset;
    const toolbar = baseHtmlPreset.editorConfig.toolbar;
    const toolbarItems = Array.isArray(toolbar) ? toolbar : toolbar?.items ?? [];
    const htmlPreset = {
      ...baseHtmlPreset,
      editorConfig: {
        ...baseHtmlPreset.editorConfig,
        plugins: [
          ...(baseHtmlPreset.editorConfig.plugins ?? []),
          InfoBox,
        ],
        toolbar: Array.isArray(toolbar)
          ? ['infoBox', '|', ...toolbarItems]
          : { ...toolbar, items: ['infoBox', '|', ...toolbarItems] },
      },
    };

    presets.defaultHtml = htmlPreset;
  },
  bootstrap() {},
};
