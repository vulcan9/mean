const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// 경로 변수
global.ROOT = {
    web: path.resolve(__dirname, '../dist'),
    server: path.resolve(__dirname, './')
};

// DB
require('./database/db.service').set();

// App
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Router
require('./routes/router.service').set(app);

//////////////////////////////////////////////
// SERVER
//////////////////////////////////////////////

const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
