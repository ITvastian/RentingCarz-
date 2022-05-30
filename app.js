require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/router');
app.use (express.json());


app.get('/health', (req, res) => res.send('Working!!!'));
app.use('/v1', router);
app.use(express.static(__dirname + '/app/public'));

app.listen(process.env.PORT, () => {
    console.log(`listening at http://localhost:${process.env.PORT}`);
});

module.exports = app;



