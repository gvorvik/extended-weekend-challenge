const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const projectRoute = require('./routes/project.route');
const entryRoute = require('./routes/entries.route');

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/projects', projectRoute);
app.use('/entries', entryRoute);

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`);
});