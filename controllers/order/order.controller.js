/** packages */

/** dto file */
const DTO = require("../../models/dto/order-dto/order.dto");

/** creating new order */

exports.createOrder = (req, res, next) => {
    let order = {
        address: req.body.address,
        phone: req.body.phone,
        deliveryDate: req.body.deliveryDate,
        customerDocument: req.body.customerDocument,
        paymentMethod: req.body.paymentMethod,
        total: req.body.total,
        products: req.body.products
    };

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
exports.getAllOrders = (req, res, next) => {
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
exports.updateOrder = (req, res, next) => {
    let order = {
        address: req.body.address,
        phone: req.body.phone,
        deliveryDate: req.body.deliveryDate,
        customerDocument: req.body.customerDocument,
        paymentMethod: req.body.paymentMethod,
        total: req.body.total,
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
exports.removeOrder = (req, res, next) => {
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
