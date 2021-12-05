const Portfolio = require('../../models/Portfolio');
exports.createPortfolio = async (req, res, next) => {
  console.log('here is the body', req.body);
  try {
    const portfolio = await Portfolio.create(req.body);
    if (!portfolio) {
      return res.status(400).json({ success: false });
    }
    res.status(201).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error,
    });
  }
};

exports.getPortfolios = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.find();
    if (!portfolio) {
      return res.status(400).json({ success: false });
    }
    res
      .status(200)
      .json({ success: true, count: portfolio.length, data: portfolio });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
