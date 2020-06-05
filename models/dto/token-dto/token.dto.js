/** packages */
const mongoose = require("mongoose");

/** import files */
const db = require("../../db.connection");
const tokenSchema = require("../../schemas/token/token.schema");

/** connection to db */
db();

tokenSchema.statics = {
    create: function (data, cb) {
        let token = new this(data);
        token.save(function(err,data){
            cb(err, data); 
        }); 
    },
    getByDocument: function (query, cb) {
        this.find(query, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query, cb);
    }
};

let tokenDTO = mongoose.model("coll_token", tokenSchema);
module.exports = tokenDTO;