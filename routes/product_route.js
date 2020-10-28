var express = require('express');
var router = express.Router();
var prod = require('../Models/products');

router.get('/', function (req, res, next) {
    prod.getProductDet(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.post('/', function (req, res, next) {

    prod.addProduct(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});

router.delete('/:id', function (req, res, next) {

    prod.deleteProduct(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports = router;