const mongoose = require('mongoose');

const TeamSchama = new mongoose.Schema({
  name: String,
  players: [String],
  expireAt: Date,
});

TeamSchama.indexes({ createdAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Team', TeamSchama);
