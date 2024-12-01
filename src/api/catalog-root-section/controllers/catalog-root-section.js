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
      console.log(response?.data.catalog_sections)
      if (response?.data) {
        response.data.catalog_sections.map((sectionObject) => { 
          sectionObject.catalog_items.map((itemsObject) => { 
            itemsArray.push(itemsObject);
          }
          );
          delete sectionObject.catalog_items;
        });
        response.data.catalog_items = {
          data: itemsArray,
        };
      }

      response.path = [
        {
          name : response.data.Name,
          to : '/catalog/' + response.data.slug
        },
      ]   

      return response;
    },
  })
);
