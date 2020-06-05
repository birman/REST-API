/** packages */
const helper = require("../helper.controller");

/** dto file */
const DTO = require("../../models/dto/security-dto/login.dto");
const DTOtoken = require("../../models/dto/token-dto/token.dto");

/** creating new customer */
exports.findByCredententials = (req, res, next) => {
    let customer = {
        document: req.body.document,
        password: req.body.password
    };
    DTO.getByDocument({ document: customer.document }, (err, data) => {
        if (err) {
            res.json({
                message: "Invalid login credentials",
                error: err
            });
        }
        else {
            if (data.length > 0) {
                console.log(data[0].password);
                const passDecrypt = helper.DecryptText(data[0].password);
                if (passDecrypt != customer.password) {
                    res.json({
                        message: "KO",
                        error: "Invalid login credentials"
                    });
                } else {

                    const payload = {
                        check: true
                    };

                    const token = helper.GenerateAuthToken(payload);

                    let tokenSchema = {
                        document: customer.document,
                        token: token
                    };

                    DTOtoken.create(tokenSchema, (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log('Token was created');
                        }
                    });

                    res.json({
                        message: "You are login successfully",
                        token: token
                    });
                }
            }
            else {
                res.json({
                    message: "KO",
                    error: "Invalid login credentials"
                });
            }
        }
    });
}

exports.logout = (req, res, next) => {
    let token = {
        document: req.body.document
    };
    DTOtoken.getByDocument({ document: token.document }, (err, data) => {
        if (err) {
            res.json({
                message: "You don't have an active session!",
                error: err
            });
        }
        else {
            if (data.length > 0) {
                console.log(data[0]._id);

                DTOtoken.delete({ _id: data[0]._id}, (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('Token was deleted');
                    }
                });

                res.json({
                    message: "Sign out successfully!",
                    document: token
                });

            }
            else {
                res.json({
                    message: "KO",
                    error: "You don't have an active session!"
                });
            }
        }
    });
}