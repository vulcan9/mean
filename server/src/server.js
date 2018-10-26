// const path = require('path');
const express = require('express');
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

// App
app.use(bodyParser.json());
app.use(cors());

// Router
require('./routes/router.service').set(app);

//////////////////////////////////////////////
// SERVER
//////////////////////////////////////////////

(async function(){
    await databaseRun();
    serverRun();
})();

// DB server: 'mongodb://localhost:27017/test'
function databaseRun(){
    return require('./database/db.service')
        .set(env.db);
}

function serverRun(){
    const server = app.listen(env.web.port, env.web.host, function () {
        console.log(`Server running at http://${env.web.host}:${env.web.port}/`);
    });
    return server;
}
