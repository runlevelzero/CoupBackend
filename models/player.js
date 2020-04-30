const mongoose = require('mongoose')

const player = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    hand: Object,
    money: Number
})

module.exports = mongoose.model('Player', player)