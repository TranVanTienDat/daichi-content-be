/**
 * page-seo service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::page-seo.page-seo', ({ strapi }) => ({
  async findBySlug(slug: string, query: Record<string, unknown> = {}) {
    const contentType = strapi.contentType('api::page-seo.page-seo');

    const sanitizedQuery = await strapi.contentAPI.sanitize.query(query, contentType);

    return strapi.documents('api::page-seo.page-seo').findFirst({
      filters: {
        slug: {
          $eq: slug,
        },
      },
      ...sanitizedQuery,
    });
  },
}));
