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
    pool.query(`INSERT INTO "projects" 
              ("project_name", "sqft", "total_hours")
              VALUES ($1, $2, $3)`, 
              [newProject.project_name, newProject.sqft, newProject.total_hours])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
        console.log(error);        
    });
});

module.exports = router;