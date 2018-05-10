//pg sql code
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'extended_weekend_challenge',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', (req, res) => {
    console.log('postgresql connected');
})

pool.on('error', (error) => {
    console.log('Error with postgresql', error);
});
//end pg sql code

module.exports = pool;