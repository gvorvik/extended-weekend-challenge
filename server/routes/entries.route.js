const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * from "entries"`)
    .then((response) => {
        res.send(response.rows);
    })
    .catch(() => {
        res.sendStatus(500);
    });
});

module.exports = router;