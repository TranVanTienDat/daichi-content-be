/**
 * article service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::article.article",
  ({ strapi }) => ({
    async findTopArticles(query: Record<string, unknown> = {}) {
      const contentType = strapi.contentType("api::article.article");
      const sanitizedQuery = await strapi.contentAPI.sanitize.query(
        query,
        contentType,
      );

      return strapi.documents("api::article.article").findMany({
        filters: {
          onTop: {
            $in: ["main", "secondary"] as unknown as ["main", "secondary"],
          },
        },
        ...sanitizedQuery,
      });
    },

    async findOtherArticles({
      page = 1,
      pageSize = 12,
      search = "",
      sort = "createdAt:desc",
    }: {
      page: number;
      pageSize: number;
      search: string;
      sort: string;
    }) {
      const contentType = strapi.contentType("api::article.article");
      const [sortField, sortOrder] = sort.split(":");

      const searchFilters = search
        ? {
            title: { $containsi: search },
          }
        : {};

      const filters = {
        $and: [
          {
            $or: [
              {
                onTop: {
                  $notIn: ["main", "secondary"] as ("main" | "secondary")[],
                },
              },
              { onTop: { $null: true } },
            ],
          },
          ...(Object.keys(searchFilters).length > 0 ? [searchFilters] : []),
        ],
      };

      const query = {
        filters,
        sort: { [sortField || "createdAt"]: sortOrder || "desc" },
        start: (page - 1) * pageSize,
        limit: pageSize,
      };

      const sanitizedQuery = await strapi.contentAPI.sanitize.query(
        query,
        contentType,
      );

      const [articles, total] = await Promise.all([
        strapi.documents("api::article.article").findMany(sanitizedQuery),
        strapi.documents("api::article.article").count({ filters }),
      ]);

      return {
        data: articles,
        meta: {
          pagination: {
            page,
            pageSize,
            total,
            pageCount: Math.ceil(total / pageSize),
          },
        },
      };
    },
  }),
);
