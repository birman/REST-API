/** packages */
const helper = require("../helper.controller");

/** dto file */
const DTO = require("../../models/dto/customer-dto/customer.dto");

/** creating new customer */
exports.createCustomer = (req, res, next) => {
    let customer = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        birthdate: req.body.birthdate,
        credit: req.body.credit,
        password: helper.EncryptText(req.body.password)
    };
    // const token =  helper.GenerateAuthToken(customer._id)
    // customer.tokens = customer.tokens.concat({token})

    DTO.create(customer, (err, data) => {
        if (err) {
            res.json({
                message: "KO",
                error: err
            });
        }
        else {
            res.json({
                message: "OK",
                data: data
            });
        }
    });
}

// get all customers
exports.getAllCustomers = (req, res, next) => {
    DTO.getAll({}, (err, data) => {
        if (err) {
            res.json({
                message: "KO",
                error: err
            });
        }
        else {
            res.json({
                message: "OK",
                data: data
            });
        }
    });
}


// get customer by document
exports.getCustomerByDocument = (req, res, next) => {
    DTO.getByDocument({ document: req.params.document }, (err, data) => {
        if (err) {
            res.json({
                message: "KO",
                error: err
            });
        }
        else {
            res.json({
                message: "OK",
                data: data
            });
        }
    });
}


/** updating a customer */
exports.updateCustomer = (req, res, next) => {
    let customer = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        birthdate: req.body.birthdate,
        credit: req.body.credit
    };

    DTO.update({ _id: req.body.id }, customer, (err, data) => {
        if (err) {
            res.json({
                message: "KO",
                error: err
            });
        }
        else {
            res.json({
                message: "OK",
                data: data
            });
        }
    });
}

// remove customer by id
exports.removeCustomer = (req, res, next) => {
    DTO.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            res.json({
                message: "KO",
                error: err
            });
        }
        else {
            res.json({
                message: "OK",
                data: data
            });
        }
    });
}
