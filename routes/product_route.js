var express = require('express');
var router = express.Router();
var prod = require('../Models/products');

router.get('/', function (req, res, next) {
    prod.getProductDet(function (req, res) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;