module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'school',
      user: 'admin',
      password: 'admin'
    },
    migrations: {
      tableName: 'migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }
};