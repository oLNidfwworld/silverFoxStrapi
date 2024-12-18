export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     headers: '*',
  //     origin: ['http://localhost:1338', 'http://localhost:3000', 'loving-harmony-5560abb005.strapiapp.com']
  //   }
  // },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
