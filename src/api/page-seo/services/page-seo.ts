/**
 * page-seo service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::page-seo.page-seo', () => ({
  async findBySlug(slug: string) {
    return strapi.documents('api::page-seo.page-seo').findFirst({
      filters: {
        slug: {
          $eq: slug,
        },
      },
    });
  },
}));
