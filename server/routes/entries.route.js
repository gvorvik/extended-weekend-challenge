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

router.post('/', (req, res) => {
        let entryToAdd = req.body;
        const queryText = `INSERT INTO "entries"
        ("entry_name", "date", "total_hours", "project_id")
        VALUES ($1, $2, $3, $4)`;
        pool.query(queryText, [entryToAdd.entry_name, entryToAdd.date,
             entryToAdd.hours, entryToAdd.project_id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log(error);        
        });
    }
);

router.delete('/:id', (req, res) => {
    const idToDelete = req.params.id;
    const queryText = 'DELETE FROM "entries" WHERE "id" = $1';
    pool.query(queryText, [idToDelete])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

module.exports = router;