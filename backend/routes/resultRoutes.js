const express = require('express');
const { saveResult, getResults } = require('../controllers/resultController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, saveResult);
router.get('/', authenticateToken, getResults);

module.exports = router;
