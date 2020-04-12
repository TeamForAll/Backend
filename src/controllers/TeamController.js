const Player = require('../models/Player')
const Team = require('../models/Team')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    async getlist(req, res){

        const Allplayers = await Player.find({main:true}).sort({"number":1})
        const numberPlayers =  await Player.find({main:true}).countDocuments();
        
        const playes = Allplayers
        let list = []
        let FormTeam = false;
        let j = 0 // To number the teams

        if(numberPlayers<=30){
            // Create team with 6 players
            for(let i=0; i < numberPlayers; i++){
                if(i % 6 == 0 && FormTeam == true){
                    let teamName = `Equipe ${(j+=1)}`
                    const playersArrays = parseStringAsArray(list)
                    team = await Team.create({
                        name : teamName,
                        players : playersArrays
                    })
                    console.log(teamName)
                    list = []
                    list.push(playes[i].name);
                }else{
                    list.push(playes[i].name);
                    FormTeam = true;
                }
                console.log(playes[i].name)
            }
    
            if(list.length > 0){
                let teamName = `Equipe ${(j+=1)}`
                const playersArrays = parseStringAsArray(list)
                team = await Team.create({
                    name: teamName,
                    players : playersArrays
                })
                console.log(teamName)
                list = []
            }
    
            console.log(list)
        }else{
            // Create team with 7 players
            for(let i=0; i < numberPlayers; i++){
                if(i % 7 == 0 && FormTeam == true){
                    let teamName = `Equipe ${(j+=1)}`
                    const playersArrays = parseStringAsArray(list)
                    team = await Team.create({
                        name: teamName,
                        players : playersArrays
                    })
                    console.log(teamName)
                    list = []
                    list.push(playes[i].name);
                }else{
                    list.push(playes[i].name);
                    FormTeam = true;
                }
                
                console.log(playes[i].name)
            }
    
            if(list.length > 0){
                let teamName = `Equipe ${(j+=1)}`
                const playersArrays = parseStringAsArray(list)
                team = await Team.create({
                    name: teamName,
                    players : playersArrays
                })
                console.log(teamName)
                list = []
            }
    
            console.log(list)
        }

        return res.json(Allplayers)


    },

    async index(req,res){
        const Teams =  await Team.find();

        return res.json(Teams)
    }


}