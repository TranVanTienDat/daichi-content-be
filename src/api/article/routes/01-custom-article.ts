import type { Core } from '@strapi/strapi';

const config: Core.RouterConfig = {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/articles/top',
      handler: 'api::article.article.findTopArticles',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/articles/list',
      handler: 'api::article.article.findOtherArticles',
      config: {
        auth: false,
      },
    },
  ],
};

export default config;
