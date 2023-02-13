module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'), // jm-portfolio
      user: env('DATABASE_USERNAME', 'admin'), // root
      password: env('DATABASE_PASSWORD', 'Great1.8'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});


