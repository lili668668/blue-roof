const config = {
  database: {
    name: 'blue-roof',
    username: process.env.npm_package_config_db_username,
    password: process.env.npm_package_config_db_password,
    host: '172.17.0.1',
    port: '27017'
  }
}

module.exports = config
