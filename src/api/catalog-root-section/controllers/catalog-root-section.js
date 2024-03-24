"use strict";

/**
 * catalog-section controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::catalog-root-section.catalog-root-section",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };

      query.populate = {
        catalog_sections: {
          populate: [
            'Image',
            'catalog_items.Image', 
          ], 
        },
      };

       
      const entity = await strapi
        .service("api::catalog-root-section.catalog-root-section")
        .find(query); 
    
      const { results } = await this.sanitizeOutput(entity, ctx);
      const response = this.transformResponse(results[0]);

      let itemsArray = [];
      if (response?.data) {
        response.data.attributes.catalog_sections.data.map((sectionObject) => {
          sectionObject.attributes.catalog_items.data.map((itemsObject) => { 
            itemsArray.push(itemsObject);
          }
          );
          delete sectionObject.attributes.catalog_items;
        });
        response.data.attributes.catalog_items = {
          data: itemsArray,
        };
      }

      response.path = [
        {
          name : response.data.attributes.Name,
          to : '/catalog/' + response.data.attributes.slug
        },
      ]   

      return response;
    },
  })
);
