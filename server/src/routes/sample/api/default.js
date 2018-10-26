/*
// 'all', 'get', 'post', 'put', 'delete'
all: function (req, res, next) {
    // next();
},
get: function (req, res, next) {
    // res.json(req.user);
},
put: function (req, res, next) {
    // req.user.name = req.params.name;
    // res.json(req.user);
},
post: function (req, res, next) {
    // next(new Error('not implemented'));
},
delete: function (req, res, next) {
    // next(new Error('not implemented'));
}
*/

module.exports = {
    '/': {
        get: function (req, res, next) {
            res.json({result: 'susses!'});
        }
    }
};