import type { Core } from "@strapi/strapi";

const config: Core.Config.Middlewares = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "https:",
            "apollo-server-landing-page.cdn.apollographql.com",
            "sandbox.embed.apollographql.com",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "apollo-server-landing-page.cdn.apollographql.com",
          ],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "apollo-server-landing-page.cdn.apollographql.com",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "apollo-server-landing-page.cdn.apollographql.com",
          ],
          "frame-src": ["sandbox.embed.apollographql.com"],
          "manifest-src": ["apollo-server-landing-page.cdn.apollographql.com"],
        },

      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

export default config;

