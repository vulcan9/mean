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

// run  sever
(async function(){
    await run_database();
    await run_server();
    console.log('------------------------------------------------------');
})();

//////////////////////////////////////////////
// SERVER
//////////////////////////////////////////////

// DB server: 'mongodb://localhost:27017/test'
function run_database(){
    return require('./database/db.service')
        .set(app);
}

function run_server(){
    console.log(`'* Run Server : http://${env.web.host}:${env.web.port}/`);
    return new Promise(function(resolve, reject) {

        const server = app.listen(env.web.port, env.web.host, function () {
            console.log('\t- Server is running');
            resolve(server);
        });

    });
}
