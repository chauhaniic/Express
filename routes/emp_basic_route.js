var express = require('express');
var router = express.Router();
var empProfile= require('../Models/empBasic');

var temp='personal';
var fun;
router.get('/:id?', function (req, res, next) 
{
    if(req.params.id){
        empProfile.getEmpDetById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        empProfile.getEmpDetails(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/personal/:id?', function (req, res, next) 
{
    if(req.params.id){
        var fun='getEmp'+temp+'ById';
        //empProfile.getEmppersonalById(req.params.id, function (err, rows) {
        empProfile.getEmppersonById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        fun='getEmp'+temp;
        empProfile.getEmppersonal(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.get('/bank/:id?', function (req, res, next) 
{
    if(req.params.id){
        var fun='getEmp'+temp+'ById';
        //empProfile.getEmppersonalById(req.params.id, function (err, rows) {
        empProfile.getEmpBankById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        fun='getEmp'+temp;
        empProfile.getEmpBank(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.get('/address/:id?', function (req, res, next) 
{
    if(req.params.id){
        //empProfile.getEmppersonalById(req.params.id, function (err, rows) {
        empProfile.getEmpaddressById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        empProfile.getEmpaddress(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/edu/:id?', function (req, res, next) 
{
    if(req.params.id){
        //empProfile.getEmppersonalById(req.params.id, function (err, rows) {
        empProfile.getEmpeduById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        empProfile.getEmpedu(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/exp/:id?', function (req, res, next) 
{
    if(req.params.id){
        //empProfile.getEmppersonalById(req.params.id, function (err, rows) {
        empProfile.getEmpexpById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        empProfile.getEmpexp(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/skill/:id?', function (req, res, next) 
{
    if(req.params.id){
        //empProfile.getEmppersonalById(req.params.id, function (err, rows) {
        empProfile.getEmpskillById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        empProfile.getEmpskill(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    empProfile.addEmpBasic(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});

router.delete('/:id',function(req,res,next){
    empProfile.deleteEmp_Basic(req.params.id,function (err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    })
});

router.put('/:id',function (req,res,next) {
    empProfile.updateEmpBasic(req.params.id,req.body,function (err,rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/personal', function (req, res, next) {
    empProfile.addEmpPersonal(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});
router.post('/bank', function (req, res, next) {
    empProfile.addEmpBank(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});
router.post('/address', function (req, res, next) {
    empProfile.addEmpaddress(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});
router.post('/edu', function (req, res, next) {
    empProfile.addEmpedu(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});
router.post('/exp', function (req, res, next) {
    empProfile.addEmpexp(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});
router.post('/skill', function (req, res, next) {
    empProfile.addEmpskill(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    });
});
router.delete('/personal/:id',function(req,res,next){
    empProfile.deleteEmp_Personal(req.params.id,function (err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    })
});
router.delete('/bank/:id',function(req,res,next){
    empProfile.deleteEmp_Bank(req.params.id,function (err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    })
});
router.delete('/address/:id',function(req,res,next){
    empProfile.deleteEmp_address(req.params.id,function (err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    })
});
router.delete('/edu/:id',function(req,res,next){
    empProfile.deleteEmp_edu(req.params.id,function (err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    })
});
router.delete('/exp/:id',function(req,res,next){
    empProfile.deleteEmp_exp(req.params.id,function (err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    })
});
router.delete('/skill/:id',function(req,res,next){
    empProfile.deleteEmp_skill(req.params.id,function (err, rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }

    })
});

router.put('/personal/:id',function (req,res,next) {
    empProfile.updateEmpPersonal(req.params.id,req.body,function (err,rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/bank/:id',function (req,res,next) {
    empProfile.updateEmpBank(req.params.id,req.body,function (err,rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/address/:id',function (req,res,next) {
    empProfile.updateEmpaddress(req.params.id,req.body,function (err,rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/edu/:id',function (req,res,next) {
    empProfile.updateEmpedu(req.params.id,req.body,function (err,rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/exp/:id',function (req,res,next) {
    empProfile.updateEmpexp(req.params.id,req.body,function (err,rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/skill/:id',function (req,res,next) {
    empProfile.updateEmpskill(req.params.id,req.body,function (err,rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports = router;