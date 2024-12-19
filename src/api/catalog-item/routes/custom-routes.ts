export default {
    routes: [
      {
        method: "GET",
        path: "/catalog-item-slug/:slug",
        handler: "catalog-item.findOne",
      },
    ],
  };