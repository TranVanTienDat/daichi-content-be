import type { StrapiApp } from "@strapi/strapi/admin";
import {
  defaultHtmlPreset,
  defaultTheme,
  setPluginConfig,
} from "@_sh/strapi-plugin-ckeditor";

export default {
  register() {
    setPluginConfig({
      presets: [defaultHtmlPreset],
      theme: defaultTheme,
    });
  },

  bootstrap(app: StrapiApp) {
    app;
  },
};
