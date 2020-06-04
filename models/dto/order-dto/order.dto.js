/** packages */
const mongoose = require("mongoose");

/** import files */
const db = require("../../db.connection");
const orderSchema = require("../../schemas/order/order.schema");

/** connection to db */
db();

orderSchema.statics = {
    create: function (data, cb) {
        let order = new this(data);
        order.save(function(err,data){
            cb(err, data); 
        }); 
    },
    getAll: function (query, cb) {
        this.find(query, cb);
    },
    update: function (query, newData, cb) {
        this.findOneAndUpdate(query, {$set: newData}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query, cb);
    }
};

let orderDTO = mongoose.model("coll_order", orderSchema);
module.exports = orderDTO;