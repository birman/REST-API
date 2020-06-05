/** import packages */

const express = require("express");
const config = require("config");
const customerController = require("./controllers/customer/customer.controller")
const orderController = require("./controllers/order/order.controller")
const loginController = require("./controllers/security/login.controller")
const bodyParser = require("body-parser");

/** server configuration */

let bodyParserJSON = bodyParser.json();
let bodyParserUrlEncoded = bodyParser.urlencoded({ extended: true });
let app = express();
app.use(bodyParserJSON);
app.use(bodyParserUrlEncoded);

/** REST API */

// welcome message

app.get("/", (req, res) => {
    res.send("Welcome to my express server.");
});

/** Customer EndPoints */

// POST
app.post("/api/customer/create", (req, res, next) => {
    customerController.createCustomer(req, res, next);
});

// GET
app.get("/api/customer/getAll", (req, res, next) => {
    customerController.getAllCustomers(req, res, next);
});

app.get("/api/customer/getByDocument/:document", (req, res, next) => {
    customerController.getCustomerByDocument(req, res, next);
});

// UPDATE
app.put("/api/customer/update", (req, res, next) => {
    customerController.updateCustomer(req, res, next);
});

// DELETE
app.delete("/api/customer/delete", (req, res, next) => {
    customerController.removeCustomer(req, res, next);
});

/** Login EndPoints */

/*app.post("/api/security/login", (req, res, next) => {
    loginController.findByCredententials(req, res, next);
});*/

app.post("/api/security/login", (req, res, next) => {
    loginController.findByCredententials(req, res, next);
});

app.post("/api/security/logout", (req, res, next) => {
    loginController.logout(req, res, next);
});


/** Order EndPoints */

// POST
app.post("/api/order/create", (req, res, next) => {
    orderController.createOrder(req, res, next);
});

// GET
app.get("/api/order/getAll", (req, res, next) => {
    orderController.getAllOrders(req, res, next);
});

// UPDATE
app.put("/api/order/update", (req, res, next) => {
    orderController.updateOrder(req, res, next);
});

// DELETE
app.delete("/api/order/delete", (req, res, next) => {
    orderController.removeOrder(req, res, next);
});

/** Run server */
const port = config.get("port");
app.listen(port, () => {
    console.log(`Express server is running in port ${port}`);
});















