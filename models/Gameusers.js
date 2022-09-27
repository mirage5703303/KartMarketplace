const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GameusersSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  claimmoney: {
    type: Number,
    required: true
  },
  buy_epic: {
    type: String,
    required: true
  },
  buy_common: {
    type: String,
    required: true
  },
  buy_legendary: {
    type: String,
    required: true
  },

  buy_rare: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('gameusers', GameusersSchema);
