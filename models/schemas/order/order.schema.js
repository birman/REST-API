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
        retryHour: {
            type: "Date",
            required: true
        },
        documentCustomer: {
            type: "String",
            required: true
        },
        typePaid: {
            type: "String",
            required: true,
        },
        value: {
            type: "String",
            required: true,
        },
        products: [{
            name: {
                type: "String",
                // required: true
            },
            amount: {
                type: "Number",
                // require: true
            },
            value: {
                type: "Number",
                // require: true
            }
        }]
    },
    {
        timestamps: true
    }
);

module.exports = orderSchema;