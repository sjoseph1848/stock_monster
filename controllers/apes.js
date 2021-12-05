const axios = require('axios');
const Ape = require('../models/Apes');
exports.getApes = async (req, res, next) => {
  try {
    const apes = await Apes.find();
    res.status(200).json({ success: true, count: apes.length, data: apes });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getApe = async (req, res, next) => {
  try {
    const ape = await Ape.find({ ticker: req.params.id });
    if (!ape) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: ape });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.createApes = async (req, res, next) => {
  let apes = await axios.get(
    `https://apewisdom.io/api/v1.0/filter/all-stocks/page/${req.params.id}`
  );
  const { results } = await apes.data;
  try {
    results.forEach(async (item) => {
      console.log(item);
      const ape = await Ape.create(item);
    });
    res.status(201).json({
      success: true,
      data: results,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
