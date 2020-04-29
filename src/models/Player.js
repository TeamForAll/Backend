const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: String,
  number: Number,
  main: Boolean,
});


module.exports = mongoose.model('Player', PlayerSchema);
