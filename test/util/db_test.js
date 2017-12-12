const dbConn = require('../../util/db.js')
const assert = require('assert')

describe('utility/database', () => {
  describe('# connect', () => {
    it('should can connect.', () => {
      return dbConn.then(db => {
        assert.ok(true)
      })
    })
  })
})
