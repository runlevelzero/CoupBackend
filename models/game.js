const mongoose = require('mongoose')

const game = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    joinCode: String,
    deck: Object,
    players: Object,
    currentTurn: Number,
    lastAction: String,
    isStarted: Boolean
})

module.exports = mongoose.model('Game', game)