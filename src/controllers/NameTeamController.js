const NameTeam = require('../models/NameTeam');

module.exports = {

  async create(req, res) {
    const { name } = req.body;

    const nameTeam = await NameTeam.create({
      name,
    });

    return res.json(nameTeam);
  },

};
