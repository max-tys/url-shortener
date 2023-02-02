const mongoose = require('mongoose');
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  // full is the name of the column in the db
  full: {
    type: String,
    require: true
  },
  short: {
    type: String,
    require: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    require: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortURL', shortUrlSchema)