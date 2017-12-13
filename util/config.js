const config = {
  database: {
    name: 'blue-roof',
    username: process.env.npm_package_config_db_username,
    password: process.env.npm_package_config_db_password,
    host: 'localhost',
    port: '27017'
  },
  env: {
    apiPath: 'http://localhost:3000'
  }
}

module.exports = config
