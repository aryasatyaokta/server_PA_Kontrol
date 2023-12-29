const UserModel = require('../models/user')

module.exports.register = (req, res) => {
    console.log(req);

    const newUser = new UserModel({
        name: req.body.name,
        absen: req.body.absen,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        .then(() => {
            res.send({ code: 200, message: 'Signup Success' });
        })
        .catch((err) => {
            res.status(500).send({ code: 500, message: 'Signup Err' });
        });
};

module.exports.login = (req, res) => {
    console.log(req.body.email);

    UserModel.findOne({ email: req.body.email })
        .then((result) => {
            console.log(result, '11');

            if (result.password !== req.body.password) {
                res.send({ code: 404, message: 'password wrong' })
            } else {
                res.send({
                    name: result.name,
                    email: result.email,
                    code: 200,
                    message: 'user Found',
                    token: result._id
                })
            }

        })
        .catch(err => {
            res.send({ code: 500, message: 'user not found' })
        })
};
