const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//////////////////////////////////////////////
// Arguments 적용
//////////////////////////////////////////////

const env = require('./server.args').get();
const app = express();
app.set('ENV', env);

//////////////////////////////////////////////
// Setup
//////////////////////////////////////////////

// DB server: 'mongodb://localhost:27017/test'
require('./database/db.service').set(env.db);

// App
app.use(bodyParser.json());
app.use(cors());

// Router
require('./routes/router.service').set(app);

//////////////////////////////////////////////
// SERVER
//////////////////////////////////////////////

const server = app.listen(env.web.port, function(){
  console.log('Server Listening on port ' + env.web.port);
});

