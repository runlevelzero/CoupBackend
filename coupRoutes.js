const logic = require('./logic')

module.exports = (api) => {

    api.route('/newPlayer')
        .post((req, res) => { logic.addNewPlayer(req,res) })

    api.route('/newGame')
        .post((req,res) => { logic.addNewGame(req,res) })
    
    api.route('/joinGame')
        .post((req,res) => { logic.addPlayerToGame(req,res) })

    api.route('/game/:id')
        .get((req,res) => { logic.getGame(req,res) })
        .post((req,res) => { logic.updateGame(req,res) })
    

}