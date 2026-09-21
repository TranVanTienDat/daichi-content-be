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
      const { page, pageSize, search, sort, populate } = ctx.query;

      const result = await strapi
        .service("api::article.article")
        .findOtherArticles({
          page: page ? Number(page) : 1,
          pageSize: pageSize ? Number(pageSize) : 10,
          search: typeof search === "string" ? search : "",
          sort: typeof sort === "string" ? sort : "createdAt:desc",
          populate,
        });

      ctx.body = result;
    },
  }),
);
