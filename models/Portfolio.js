const mongoose = require('mongoose');
const axios = require('axios');
const PortfolioSchema = new mongoose.Schema({
  name: String,
  ticker: {
    type: String,
    required: true,
    unique: true,
  },
  price: Number,
  volumeAvg: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PortfolioSchema.pre('save', async function (next) {
  let { data } = await axios.get(
    `https://financialmodelingprep.com/api/v3/profile/${this.ticker}?apikey=${process.env.FIN_KEY}`
  );
  this.name = data[0].companyName;
  this.price = data[0].price;
  this.volumeAvg = data[0].volAvg;
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
