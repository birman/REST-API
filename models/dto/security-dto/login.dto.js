/** packages */
const mongoose = require("mongoose");

/** import files */
const db = require("../../db.connection");
const customerSchema = require("../../schemas/customer/customer.schema");

/** connection to db */
db();

customerSchema.statics = {
    findByCredententials: function (data, cb) {
    const email = data.email;
     this.findOne({email}, cb);
    },
};

let customerDTO = mongoose.model("coll_customer", customerSchema);
module.exports = customerDTO;