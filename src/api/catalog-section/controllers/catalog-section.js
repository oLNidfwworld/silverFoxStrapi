"use strict";

/**
 * catalog-section controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::catalog-section.catalog-section",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug, rootSlug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters = {
        $and: [
          {
            slug: {
              $eq: slug,
            },
          },
          {
            catalog_root_section: {
              slug: {
                $eq: rootSlug,
              },
            },
          },
        ],
      };
      // query.filters.slug = { '$eq': slug };
      query.populate = ["Image", "catalog_items.Image", "catalog_root_section"];
      const entity = await strapi
        .service("api::catalog-section.catalog-section")
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(results[0]);
    },
  })
);
