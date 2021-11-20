const express = require('express');
const router = express.Router();
const { getFinancialprepSentiment } = require('../../controllers/sentiment/financialprepSentiment');


router.route('/:id').get(getFinancialprepSentiment);

module.exports = router;