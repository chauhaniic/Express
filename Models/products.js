var db = require('../dbConnection'); //reference of dbconnection.js file

var Product = {
    getProductDet: function (callback) {
        db.query('select * from product_list', callback);
    },
    getProductDetById: function (id,callback) {
        db.query('select * from product_list where id=?',[id], callback);
    },
    addProduct: function (product, callback) {
        return db.query('insert into product_list values(?,?,?,?)', [product.id, product.product_name, product.product_desc, product.product_price], callback);
    },
    deleteProduct: function (id, callback) {
        return db.query('delete from product_list where id=?', [id], callback);
    },
    updateProduct: function (id,product, callback) {
        id=Number(id)
        return db.query('update product_list set product_name=?,product_desc=?,product_price=? where id=?', [product.product_name, product.product_desc, product.product_price,id], callback);
    }
}

module.exports = Product;