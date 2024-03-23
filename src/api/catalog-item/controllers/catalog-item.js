"use strict";

/**
 * catalog-item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::catalog-item.catalog-item",
  ({ strapi }) => ({
    async findOne(ctx) {  
        const { slug } = ctx.params; 
        const { query } = ctx; 
        if (!query.filters) query.filters = {}
        query.filters.slug = { '$eq': slug }
        
      query.populate = [
        'Image', 
        'catalog_sections.catalog_root_section',
      ];
        const entity = await strapi.service('api::catalog-item.catalog-item').find(query);
        const { results } = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(results[0]);
    },
  })
);
