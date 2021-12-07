const express = require('express');
const router = express.Router();
const { getIncome } = require('../../controllers/fundamental/income');

router.route('/').get(getIncome);

module.exports = router;
