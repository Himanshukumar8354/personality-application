const pool = require('../config/db');

exports.submitFeedback = async (req, res) => {
  const { userId } = req.user;
  const { rating, comment } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO feedback (user_id, rating, comment) VALUES ($1, $2, $3) RETURNING *',
      [userId, rating, comment]
    );
    res.status(201).json({ feedback: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Could not submit feedback' });
  }
};
