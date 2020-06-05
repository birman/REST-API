/** packages */
const helper = require("../helper.controller");

/** dto file */
const DTO = require("../../models/dto/security-dto/login.dto");

/** creating new customer */
exports.findByCredententials = (req, res, next) => {
    let customer = {
        email: req.body.email,
        password: helper.EncryptText(req.body.password)
    };

    DTO.findByCredententials(customer, (err, data) => {
        if (err) {
            res.json({
                message: "Invalid login credentials",
                error: err
            });
        }
        else {

            if (data.password != customer.password){
                res.json({
                    message: "Invalid login credentials",
                    error: err
                });
            }else{
                res.json({
                    message: "OK",
                    data: ({data})
                });
            }          
        }
    });
}

