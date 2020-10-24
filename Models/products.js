var db = require('../dbConnection'); //reference of dbconnection.js file

var Product = {
    getProductDet: function (callback) {
        db.query('select * from product_list', callback);
    }
}

module.exports = Product;