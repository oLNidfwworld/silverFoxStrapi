module.exports = {
    routes: [
      {
        method: "GET",
        path: "/catalog-section-slug/:rootSlug/:slug",
        handler: "catalog-section.findOne",
      },
    ],
  };