export default ({ env }) => ({
    'users-permissions': {
      config: {
        register : {
          allowedFields: ['name', 'secondName'],
          requiredFields: ['name', 'secondName']
        },
        jwt: {
          expiresIn: '30d', 
        },
      },
    },
  });