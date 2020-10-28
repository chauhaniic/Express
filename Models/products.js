var db = require('../dbConnection'); //reference of dbconnection.js file

var Product = {
    getProductDet: function (callback) {
        db.query('select * from product_list', callback);
    },
    addProduct: function (product, callback) {
        return db.query('insert into product_list values(?,?,?,?)', [product.id, product.product_name, product.product_desc, product.product_price], callback);
    },
    deleteProduct: function (id, callback) {
        return db.query('delete from product_list where id=?', [id], callback);
    }
}

module.exports = Product;