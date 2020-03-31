const Player = require('../models/Player')
const Team = require('../models/Team')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    async getlist(req, res){

        const players = await Player.find({main:false})

        const numberPlayers =  await Player.find({main:false}).countDocuments();
        console.log(numberPlayers)
        
        const jogadores = players
        let lista = []
        const name = "Lista de Reservas"
        
        for(let i=0; i < numberPlayers; i++){
                lista.push(jogadores[i].name);
        }
        const playersArrays = parseStringAsArray(lista)

        await Team.create({
            name,
            players : playersArrays
        })

        console.log(lista)
        return res.json(players)


    }


}