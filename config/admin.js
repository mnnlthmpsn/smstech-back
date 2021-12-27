module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8619cd27c1639109aeae1cc7164b5d5c'),
  },
});
