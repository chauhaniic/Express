var express = require('express');
var router = express.Router();
var dom = require('../../Models/Remote/domain');

router.get('/:id?', function (req, res, next) {
    if(req.params.id){
        dom.getDomainDetById(req.params.id,function(err,rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }else{
       dom.getDomainDet(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    }); 
    }
    
});
router.post('/', function (req, res, next) {

    dom.addDomain(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});

router.delete('/:id', function (req, res, next) {

    dom.deleteDomain(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});
router.put('/:id', function (req, res, next) {

    dom.updateDomain(req.params.id,req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports = router;