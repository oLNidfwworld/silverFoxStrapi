export default {
    routes: [
      {
        method: "GET",
        path: "/catalog-root-section-slug/:slug",
        handler: "catalog-root-section.findOne",
      },
    ],
  };