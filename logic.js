const mongoose = require('mongoose')
const DBConnection = require('./DBLogic')
const coupLogic = require('./coupLogic')

exports.addNewPlayer = (req,res) => {

    let db = new DBConnection()
    db.addPlayer(req.body.userName)
    res.status(200).json(req.body)

}

exports.addNewGame = (req, res) => {

    let db = new DBConnection()
    gameData = {
        joinCode: coupLogic.generateJoinCode(),
        deck: coupLogic.generateDeck(),
        players: [
            {
                id: req.body.playerID,
                hand: [],
                money: 0
            }
        ]
    }
    db.newGame(gameData)
    res.status(200).json(req.body)
}

exports.getGame = (req, res) => {
    let db = new DBConnection()
    db.getGame(req.params.id, res)
}

exports.updateGame = (req,res) => {
    const db = new DBConnection()
    db.updateGame(req.body.game)

    res.status(200).json({"success": "true"})
}

exports.addPlayerToGame = (req,res) => {
    const db = new DBConnection()
    db.addPlayerToGame(req.body.playerID,req.body.joinCode)

    res.status(200).json({"success": "true"})

}