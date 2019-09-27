const MongoClient = require('mongodb').MongoClient
const credentials = require('../config/credentials.js')

let db

module.exports = {
  connect: (callback) => {
    MongoClient.connect(credentials.connString, (error, client) => {
      db = client.db(credentials.db)
      if(error) {
        return callback(err)
      }
    })
  },

  getDb: () => {
    return db
  }
}
