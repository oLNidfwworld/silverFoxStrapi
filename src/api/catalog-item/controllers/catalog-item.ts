// @ts-nocheck
// TODO: some do with ts-nocheck
import { factories } from "@strapi/strapi"; 
import { ApiCatalogItemCatalogItem } from "../../../../types/generated/contentTypes";
 
export default factories.createCoreController(
  "api::catalog-item.catalog-item",
  ({ strapi }) => ({
    async findOne(ctx) {  
        const { slug } : { slug : string }= ctx.params; 
        const { query } = ctx; 
        if (!query.filters) query.filters = {}; 
        (query.filters as Record<any,any>).slug = { '$eq': slug }
        
      query.populate = [
        'Image', 
        'catalog_sections.catalog_root_section',
      ];
        const entity = await strapi.service('api::catalog-item.catalog-item').find(query);
        const { results } = await this.sanitizeOutput(entity, ctx); 
        const response = this.transformResponse(results[0]);
        const rootSectionSlug = response.data.catalog_sections[0].catalog_root_section.slug;
        const sectionSlug = response.data.catalog_sections[0].slug;
        const itemSlug = response.data.slug;
        response.path = [ 
          {
            name : response.data.catalog_sections[0].catalog_root_section.Name,
            to : '/catalog/' + rootSectionSlug,
          },
          {
            name : response.data.catalog_sections[0].Name,
            to : '/catalog/' + rootSectionSlug + '/' + sectionSlug,
          }, 
          {
            name : response.data.Name,
            to : '/catalog/' + rootSectionSlug + '/' + sectionSlug + '/' + itemSlug,
          },
        ]   

        return response;
    },
  })
);
