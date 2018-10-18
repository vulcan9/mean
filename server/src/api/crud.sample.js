// Model Schema
// let Model = require('../models/Model');

module.exports = {

    // expressRouter.route('/').get(function (req, res) {});
    '/': {
        get: function (req, res, next) {
            /*
            Model.find(function (err, models) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(models);
                }
            });
            */
            res.json({result: 'susses!'});
        }
    },

    // expressRouter.route('/add').post(function (req, res) {});
    '/add': {
        post: function (req, res, next) {
            /*
            let model = new Model(req.body);
            model.save()
                .then(game => {
                    res.status(200).json({'model': 'Model in added successfully'});
                })
                .catch(err => {
                    res.status(400).send("unable to save to database");
                });
            */
            res.status(200).json({result: 'added successfully'});
        }
    },

    // expressRouter.route('/edit/:id').get(function (req, res) {});
    '/edit/:id': {
        get: function (req, res, next) {
            /*
            let id = req.params.id;
            Model.findById(id, function (err, model) {
                res.json(model);
            });
            */
            res.status(200).json({result: 'edit successfully', _id: req.params.id});
        }
    },

    // expressRouter.route('/update/:id').post(function (req, res) {});
    '/update/:id': {
        post: function (req, res, next) {
            /*
            Model.findById(req.params.id, function (err, model) {
                if (!model)
                    return next(new Error('Could not load Document'));
                else {
                    model.unit_name = req.body.unit_name;
                    model.unit_price = req.body.unit_price;

                    model.save().then(model => {
                        res.json('Update complete');
                    })
                        .catch(err => {
                            res.status(400).send("unable to update the database");
                        });
                }
            });
            */
            res.status(200).json({result: 'update successfully', _id: req.params.id});
        }
    },

    // expressRouter.route('/delete/:id').get(function (req, res) {});
    '/delete/:id': {
        get: function (req, res, next) {
            /*
            Model.findByIdAndRemove({_id: req.params.id}, function (err, model) {
                if (err) res.json(err);
                else res.json('Successfully removed');
            });
            */
            res.status(200).json({result: 'remove successfully', _id: req.params.id});
        }
    }
};
