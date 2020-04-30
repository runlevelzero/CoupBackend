exports.generateDeck = () => {
    deck = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]
    for(index = 0; index < deck.length; index++) {
        temp = deck[index]
        randNum = Math.floor(Math.random() * 15)
        deck[index] = deck[randNum]
        deck[randNum] = deck[temp]

    }
    return deck
}
exports.generateJoinCode = () => {
    joinCode = ''
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(i = 0; i < 3; i++) {
        joinCode += characters.charAt(Math.floor(Math.random() * 26))
    }
    for(i = 0; i < 4; i++) {
        joinCode += `${Math.floor(Math.random() * 10)}`
    }
    return joinCode
}