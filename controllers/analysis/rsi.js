const Portfolio = require('../../models/Portfolio');

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
