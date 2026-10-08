/**
 * article controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::article.article",
  ({ strapi }) => ({
    async findTopArticles(ctx) {
      const articles = await strapi
        .service("api::article.article")
        .findTopArticles(ctx.query);

      ctx.body = articles;
    },

    async findOtherArticles(ctx) {
      const {
        pagination,
        search,
        sort,
        populate,
      }: {
        pagination?: {
          page?: string;
          pageSize?: string;
        };
        search?: string;
        sort?: string;
        populate?: any;
      } = ctx.query;

      const result = await strapi
        .service("api::article.article")
        .findOtherArticles({
          page: pagination?.page ? Number(pagination.page) : 1,
          pageSize: pagination?.pageSize ? Number(pagination.pageSize) : 10,
          search: typeof search === "string" ? search : "",
          sort: typeof sort === "string" ? sort : "createdAt:desc",
          populate,
        });

      ctx.body = result;
    },
  }),
);
