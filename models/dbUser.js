const mongoose = require('mongoose')

const dbUser = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String
})

module.exports = mongoose.model('DBUser', dbUser)
