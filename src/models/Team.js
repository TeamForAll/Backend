const mongoose = require('mongoose');

const TeamSchama = new mongoose.Schema({
  name: String,
  players: [String],
});

module.exports = mongoose.model('Team', TeamSchama);
