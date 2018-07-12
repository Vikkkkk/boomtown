const { Pool } = require('pg')

module.exports = function(app) {
  return new Pool({
    host: app.get('PG_HOST'),
    user: app.get('PG_USER'),
    database: app.get('PG_DB'),
    password: app.get('PG_PASSWORD'),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  })
}
