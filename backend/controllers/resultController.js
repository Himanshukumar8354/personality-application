const pool = require('../config/db');

exports.saveResult = async (req, res) => {
  const { userId } = req.user;
  const { mbti, bigfive } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO results (user_id, mbti_result, bigfive_result) VALUES ($1, $2, $3) RETURNING *',
      [userId, mbti, bigfive]
    );
    res.status(201).json({ result: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Could not save result' });
  }
};

exports.getResults = async (req, res) => {
  const { userId } = req.user;
  try {
    const result = await pool.query(
      'SELECT * FROM results WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    res.json({ results: result.rows });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch results' });
  }
};
