const Player = require('../models/Player')
const Team = require('../models/Team')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    async getlist(req, res){

        const players = await Player.find({main:true}).sort({"number":1})
        const numberPlayers =  await Player.find({main:true}).countDocuments();
        
        const jogadores = players
        let lista = []
        let formouEquipe = false;
        let j = 0
        // let random = Math.floor(Math.random()*(listAnimalsName.length))

        for(let i=0; i < numberPlayers; i++){
            if(i % 7 == 0 && formouEquipe == true){
                let nomeTime = `Equipe ${(j+=1)}`
                // let nomeTime = listAnimalsName[random]
                let name = nomeTime
                // listAnimalsName.pop(random)
                // console.log(listAnimalsName.length)
                const playersArrays = parseStringAsArray(lista)
                time = await Team.create({
                    name,
                    players : playersArrays
                })
                console.log(nomeTime)
                lista = []
                lista.push(jogadores[i].name);
                // random = Math.floor(Math.random()* (listAnimalsName.length))
            }else{
                lista.push(jogadores[i].name);
                formouEquipe = true;
            }
            
            console.log(jogadores[i].name)
        }

        if(lista.length == 7){
            let nomeTime = `Equipe ${(j+=1)}`
            // let nomeTime = listAnimalsName[random]
            let name = nomeTime
            // listAnimalsName.pop(random)
            // console.log(listAnimalsName.length)
            const playersArrays = parseStringAsArray(lista)
            time = await Team.create({
                name,
                players : playersArrays
            })
            console.log(nomeTime)
            lista = []
            // random = Math.floor(Math.random()* (listAnimalsName.length))
        }

        console.log(lista)

        return res.json(players)


    },

    async index(req,res){
        const Teams =  await Team.find();

        return res.json(Teams)
    }


}