import type { Schema, Attribute } from '@strapi/strapi';

export interface BrandsBrandsRow extends Schema.Component {
  collectionName: 'components_brands_brands_rows';
  info: {
    displayName: 'BrandsRow';
    icon: 'dashboard';
  };
  attributes: {
    Imagees: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brands.brands-row': BrandsBrandsRow;
    }
  }
}
