/**
 * page-seo controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::page-seo.page-seo', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const document = await strapi.service('api::page-seo.page-seo').findBySlug(slug);

    if (!document) {
      return ctx.notFound('Không tìm thấy page-seo');
    }

    ctx.body = document;
  },
}));
