const Player = require('../models/Player');
const Team = require('../models/Team');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

  async getlist(req, res) {
    const Allplayers = await Player.find({ main: false });

    const numberPlayers = await Player.find({ main: false }).countDocuments();
    console.log(numberPlayers);

    const players = Allplayers;
    const list = [];
    const name = 'Lista de Reservas';

    for (let i = 0; i < numberPlayers; i += 1) {
      list.push(players[i].name);
    }
    const playersArrays = parseStringAsArray(list);

    await Team.create({
      name,
      players: playersArrays,
    });

    console.log(list);
    return res.json(Allplayers);
  },


};
