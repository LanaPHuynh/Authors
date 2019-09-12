const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const path = ('path')

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(port, () => console.log(`listening on port ${port}`));
require('./backend/routes')(app);