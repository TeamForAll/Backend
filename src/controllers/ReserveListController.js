const Player = require('../models/Player');
const Team = require('../models/Team');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async getlist(request, response) {
    const Allplayers = await Player.find({ main: false });

    const numberPlayers = await Player.find({ main: false }).countDocuments();

    const players = Allplayers;
    const list = [];
    const name = 'Lista de reservas';

    for (let i = 0; i < numberPlayers; i += 1) {
      list.push(players[i].name);
    }
    const playersArrays = parseStringAsArray(list);

    await Team.create({
      name,
      players: playersArrays,
    });

    return response.json(Allplayers);
  },
};
