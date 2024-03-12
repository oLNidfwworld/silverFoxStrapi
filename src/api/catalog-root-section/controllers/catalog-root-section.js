'use strict';

/**
 * catalog-section controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
 

module.exports = createCoreController(
    "api::catalog-root-section.catalog-root-section",
    ({ strapi }) => ({
      async findOne(ctx) {  
          const { slug } = ctx.params; 
          const { query } = ctx;  
          if (!query.filters) query.filters = {}
          query.filters.slug = { '$eq': slug }
          query.populate = [
            'catalog_sections'
          ];
          const entity = await strapi.service('api::catalog-root-section.catalog-root-section').find(query);
          const { results } = await this.sanitizeOutput(entity, ctx); 
          return this.transformResponse(results[0]);
      },
    })
  );
  