const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * from "projects"`)
    .then((response) => {
        res.send(response.rows);
    })
    .catch(() => {
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let newProject = req.body; 
    res.sendStatus(200);
});

module.exports = router;