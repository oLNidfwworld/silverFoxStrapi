import type { Schema, Struct } from '@strapi/strapi';

export interface BrandsBrandsRow extends Struct.ComponentSchema {
  collectionName: 'components_brands_brands_rows';
  info: {
    displayName: 'BrandsRow';
    icon: 'dashboard';
  };
  attributes: {
    Imagees: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brands.brands-row': BrandsBrandsRow;
    }
  }
}
