export default function(plugin){
  plugin.controllers.user.testMethod = ( ctx ) => {
    console.log(ctx);
    return ctx
  }  
  plugin.routes['content-api'].routes.push({
    method: 'POST',
    path: '/user/test-method',
    handler: 'user.testMethod',
    config: {
      prefix: ''
    }
  });
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
    // const register = plugin.controllers.auth.register;

    // plugin.controllers.auth.register = async (ctx) => { 
    //   await register(ctx)
    
    //   // then get userId from register response 
    //   const userId = ctx.response.body.user.id
    //   console.log(userId);
    //   // save custom data registration with update service
    //   const user = await strapi.entityService.update('plugin::users-permissions.user', userId, {
    //     data: {
    //       name: ctx.request.body.name,
    //       seconName: ctx.request.body.seconName,
    //    },
    //   });
    
    //   // return the response as you want
    //   ctx.body = { data: `Congrats ${user.name}! your account has registered successfully.` }
    // }
  
    return plugin;
  };
  