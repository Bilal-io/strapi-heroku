module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {
        folder: env('CLOUDINARY_FOLDER', '')
      },
      delete: {},
    },
  },
  graphql: {
    endpoint: '/graphql',
    tracing: false,
    shadowCRUD: true,
    playgroundAlways: env('NODE_NODE_ENV') === 'development',
    depthLimit: 7,
    amountLimit: 100,
  }
});
