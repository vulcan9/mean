// const path = require('path');
const mongoose = require('mongoose');
const db = require('./db');

module.exports.set = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect(db.server).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );
};



