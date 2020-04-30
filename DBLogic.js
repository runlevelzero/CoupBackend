const MONGODB_SETTINGS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
const DBUser = require('./models/dbUser')
const Game = require('./models/game')
const mongoose = require('mongoose');
const coupLogic = ('./coupLogic')
const username = 'DBAdmin'
const password = 'YLAF2G26E54iaHLB'
class DBConnection {
    constructor() {
        let uri = `mongodb+srv://${username}:${password}@cluster0-groam.mongodb.net/test?retryWrites=true&w=majority`
        mongoose.connect(uri, MONGODB_SETTINGS)

        const db = mongoose.connection
        db.on('error', console.error.bind(console, '[-] Connection Error:'))
        db.once('open', () => {console.log("[+] Connection to DB is Successful")});
    }
    addPlayer(userName) {
        const user = new DBUser ({
            _id: new mongoose.mongo.ObjectId(),
            userName
        })

        user.save()
            .then(result => {console.log(result)})
            .catch(err => console.log(err))
    }
    newGame(gameObj) {
        const game = new Game({
            _id: mongoose.mongo.ObjectId(),
            joinCode: gameObj.joinCode,
            deck: gameObj.deck,
            players: gameObj.players,
            currentTurn: 0,
            lastAction: "",
            isStarted: false   
        })
        game.save()
        .then(result => {console.log(result)})
        .catch(err => console.log(err))
    }
    getGame(gameID, res) {
        Game.findById(gameID)
        .exec()
        .then( doc => {
            res.status(200).json(doc)
        })
        .catch(err => console.log(err))
    }
    updateGame(game) {
        Game.findByIdAndUpdate(game._id,game)
            .exec()
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    addPlayerToGame(playerID, joinCode) {
        Game.findOne({joinCode})
            .exec()
            .then(doc => {
                var players = doc.players
                players.push({
                    id:playerID,
                    hand: [],
                    money: 0
                })
                Game.findOneAndUpdate({joinCode}, {players})
                    .exec()
                    .then(res => {console.log(res)})
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}

module.exports = DBConnection