const mongoose = require('mongoose');

const ApeSchema = new mongoose.Schema({
  rank: {
    type: Number,
    required: true,
  },
  ticker: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mentions: {
    type: String,
    required: true,
  },
  upvotes: {
    type: String,
    required: true,
  },
  rank_24h_ago: {
    type: String,
    required: true,
  },
  mentions_24h_ago: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Ape', ApeSchema);
