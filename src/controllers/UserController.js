const Player = require('../models/Player');
const generateNumber = require('../utils/generateNumber');

module.exports = {

  async store(req, res) {
    const numberPlayers = await Player.countDocuments();
    const { name } = req.body;
    const number = generateNumber();

    if (numberPlayers <= 34) {
      const main = true;
      await Player.create({
        name,
        number,
        main,
      });
      return res.json({ message: 'Main' });
    }
    const main = false;
    await Player.create({
      name,
      number,
      main,
    });
    return res.json({ message: 'Reserve' });
  },
};
