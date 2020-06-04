/** packages */
const helper = require("../helper.controller");

/** dto file */
const DTO = require("../../models/dto/order-dto/order.dto");

/** creating new order */
exports.createorder = (req, res, next) => {
    let order = {
        address: req.body.address,
        phone: req.body.phone,
        retryHour: req.body.retryHour,
        documentCustomer: req.body.documentCustomer,
        typePaid: req.body.typePaid,
        value: req.body.value,
        products: req.body.products
    };
    // const token =  helper.GenerateAuthToken(order._id)
    // order.tokens = order.tokens.concat({token})

    DTO.create(order, (err, data) => {
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

// get all orders
exports.getAllorders = (req, res, next) => {
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

/** updating a order */
exports.updateorder = (req, res, next) => {
    let order = {
        address: req.body.address,
        phone: req.body.phone,
        retryHour: req.body.retryHour,
        documentCustomer: req.body.documentCustomer,
        typePaid: req.body.typePaid,
        value: req.body.value,
        products: req.body.products
    };

    DTO.update({ _id: req.body.id }, order, (err, data) => {
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

// remove order by id
exports.removeorder = (req, res, next) => {
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
