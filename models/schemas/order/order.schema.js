/** packages */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        address: {
            type: "String",
            required: true
        },
        phone: {
            type: "String",
            required: true
        },
        deliveryDate: {
            type: "Date",
            required: true
        },
        customerDocument: {
            type: "String",
            required: true
        },
        paymentMethod: {
            type: "String",
            required: true,
        },
        total: {
            type: "Number",
            required: true,
        },
        products: [{
            name: {
                type: "String"
            },
            amount: {
                type: "Number"
            },
            total: {
                type: "Number"
            }
        }]
    },
    {
        timestamps: true
    }
);

module.exports = orderSchema;