const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from the routes!');
});

router.use('/users', require('./users'));

module.exports = router;