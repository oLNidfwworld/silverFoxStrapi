module.exports = (plugin) => {
//   plugin.controllers.user.addToCart = async (ctx) => {
//     if (!ctx.state.user || !ctx.state.user.id) {
//       return (ctx.response.status = 401);
//     } 

//     if ( !('cart' in ctx.request.body) ) {
//         return (ctx.response.status = 401);
//     }

//     const cartItem = ctx.request.body.cart;

//     await strapi
//       .query("plugin::users-permissions.user")
//       .update({
//         where: { id: ctx.state.user.id },
//         data: ctx.request.body,
//       })
//       .then((res) => {
//         ctx.response.status = 200;
//       });
//   };

//   plugin.routes["content-api"].routes.push({
//     method: "PUT",
//     path: "/user/cart/add",
//     handler: "user.addToCart",
//     config: {
//       prefix: "",
//       policies: [],
//     },
//   });

  return plugin;
};
