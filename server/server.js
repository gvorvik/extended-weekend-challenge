const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.get('/projects', (req, res) => {
    res.send('get got got');
});

app.post('/projects', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`);
});