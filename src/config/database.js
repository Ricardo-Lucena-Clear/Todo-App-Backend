const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.Connection("mongodb://localhost/todo")