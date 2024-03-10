'use strict';

/**
 * catalog-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::catalog-item.catalog-item');
