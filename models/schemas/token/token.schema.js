/** packages */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tokenSchema = new Schema(
    {
        document: {
            type: "String",
            required: true,
            unique: true
        },
        token: {
            type: "String",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = tokenSchema;