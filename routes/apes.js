const express = require('express');
const router = express.Router();
const { getApes, createApes, getApe } = require('../controllers/apes');

// How to access each of the routes
router.route('/').get(getApes);
router.route('/:id').post(createApes).get(getApe);
// router
//   .route('/:id')
//   .get(getBootcamp)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

// How to export route to the server.js file
module.exports = router;
