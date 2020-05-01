const mongoose = require('mongoose');

const NameTeamSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true },
);

// NameTeamSchema.indexes({ createdAt: '00:00:00' }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('NameTeam', NameTeamSchema);
