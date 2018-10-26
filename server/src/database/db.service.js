// const path = require('path');
const mongoose = require('mongoose');

module.exports.set = function (db) {

    // server: 'mongodb://localhost:27017/test'
    const db_server = [db.protocol, '://', db.host, ':', db.port, '/', db.name].join('');
    console.log('* DB Server : ', db_server);

    mongoose.Promise = global.Promise;
    mongoose.connect(db_server, { useNewUrlParser: true })
        .then(
            () => {
                console.log('Database is connected')
            },
            err => {
                console.log('Can not connect to the database' + err)
            }
        );
};



