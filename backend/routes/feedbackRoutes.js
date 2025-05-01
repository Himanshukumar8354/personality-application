const express = require('express');
const { submitFeedback } = require('../controllers/feedbackController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, submitFeedback);

module.exports = router;
