const express = require('express');
const router = express.Router();
const { getPortfolios, createPortfolio } = require('../../controllers/fundamental/portfolio');

router.route('/').get(getPortfolios).post(createPortfolio);


module.exports = router;