// const path = require('path');
const mongoose = require('mongoose');

module.exports.set = function (app) {

    const ENV = app.get('ENV');
    const db = ENV.db;

    // server: 'mongodb://localhost:27017/test'
    const db_server = [db.protocol, '://', db.host, ':', db.port, '/', db.name].join('');
    console.log('* DB Server : ', db_server);

    mongoose.Promise = global.Promise;
    return mongoose.connect(db_server, { useNewUrlParser: true })
        .then(
            () => {
                console.log('\t- Database is connected')
            },
            err => {
                console.log('\t- Can not connect to the database' + err)
            }
        );
};



