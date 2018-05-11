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

    //Calculate hours worked
    let hours = calcHours(entryToAdd.start, entryToAdd.end);
    entryToAdd.hours = Number(hours.toFixed(2));

    pool.query(queryText, [entryToAdd.entry_name, entryToAdd.date,
    entryToAdd.hours, entryToAdd.project_id])
        .then((response) => {
            setHours();
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log(error);
        });
});

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


//function to calculate hours
function calcHours(start, end) {
    //Break apart time into hours and minutes
    let startArray = start.split(':');
    let endArray = end.split(':');
    //Calculate total minutes for start and end
    let startMinute = Number(startArray[1]) + (Number(startArray[0]) * 60);
    let endMinute = Number(endArray[1]) + (Number(endArray[0]) * 60);
    //Return Hours Worked
    let hoursWorked = (endMinute - startMinute) / 60;
    return hoursWorked;
};

function setHours() {
    pool.query(`SELECT "projects"."id", SUM("entries"."total_hours") FROM "projects"
    JOIN "entries" ON "projects"."id"="entries"."project_id"
    GROUP BY "projects"."id";`)
    .then((results) => {
        console.log(results.rows);
    })
    .catch((error) => {
        console.log(error);
    });
}


module.exports = router;