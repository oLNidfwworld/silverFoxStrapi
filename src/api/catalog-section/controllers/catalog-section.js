'use strict';

/**
 * catalog-section controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
 

module.exports = createCoreController(
    "api::catalog-section.catalog-section",
    ({ strapi }) => ({
      async findOne(ctx) {  
          const { slug } = ctx.params; 
          const { query } = ctx; 
          console.log(this);
          if (!query.filters) query.filters = {}
          query.filters.slug = { '$eq': slug }
          query.populate = [
            'Image',
            'catalog_items'
          ];
          const entity = await strapi.service('api::catalog-section.catalog-section').find(query);
          const { results } = await this.sanitizeOutput(entity, ctx); 
          return this.transformResponse(results[0]);
      },
    })
  );
  