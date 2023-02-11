module.exports = {
  development: {
    client: process.env.CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD
    },
    migrations: {
      tableName: 'migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }
};