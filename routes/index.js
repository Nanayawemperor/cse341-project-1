const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  //#swagger.tags=['Hello from the routes!']
  res.send('Hello from the routes!');
});

router.use('/users', require('./users'));

module.exports = router;