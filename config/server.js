module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'W11cNvoiUQeUjsfwKhaAepEY4lCtCNCyGNsXQt1sojbWQ2TpvflqRR8ywHrh6QKANspQKuuBnwsgdt6SdIDQvA=='),
    },
  },
});
