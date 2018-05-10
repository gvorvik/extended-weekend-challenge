const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    res.send('get got got');
});

module.exports = router;