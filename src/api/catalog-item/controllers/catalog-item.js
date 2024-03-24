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

        const response = this.transformResponse(results[0]);
        const rootSectionSlug = response.data.attributes.catalog_sections.data[0].attributes.catalog_root_section.data.attributes.slug;
        const sectionSlug = response.data.attributes.catalog_sections.data[0].attributes.slug;
        const itemSlug = response.data.attributes.slug;
        response.path = [ 
          {
            name : response.data.attributes.catalog_sections.data[0].attributes.catalog_root_section.data.attributes.Name,
            to : '/catalog/' + rootSectionSlug,
          },
          {
            name : response.data.attributes.catalog_sections.data[0].attributes.Name,
            to : '/catalog/' + rootSectionSlug + '/' + sectionSlug,
          }, 
          {
            name : response.data.attributes.Name,
            to : '/catalog/' + rootSectionSlug + '/' + sectionSlug + '/' + itemSlug,
          },
        ]   

        return response;
    },
  })
);
