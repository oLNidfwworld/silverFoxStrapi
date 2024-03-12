module.exports = {
    routes: [
      {
        method: "GET",
        path: "/catalog-section-slug/:slug",
        handler: "catalog-section.findOne",
      },
    ],
  };