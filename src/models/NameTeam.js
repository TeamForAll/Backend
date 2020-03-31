const mongoose = require('mongoose')

const NameTeamSchema = new mongoose.Schema({
    name : String
})

module.exports = mongoose.model('NameTeam', NameTeamSchema)