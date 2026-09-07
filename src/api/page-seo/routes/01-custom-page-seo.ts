import type { Core } from '@strapi/strapi';

const config: Core.RouterConfig = {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/page-seos/slug/:slug',
      handler: 'api::page-seo.page-seo.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};

export default config;
