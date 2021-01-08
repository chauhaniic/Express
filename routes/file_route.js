const { request } = require('express');
var express = require('express');
var router = express.Router();
var task = require('../Models/stFile');
var formdata = require('formdata-parser')
router.get('/:id?', function (req, res, next) 
{
    if(req.params.id){
        task.getfileById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
    else{
        task.getAllfiles(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    try {
        //console.log(req)
         if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else  {
    if(req.files.upload.size>1010011){
        return(
            res.json
            ({
                message:"File Size is Large"
            })
        )
    }
    let temp=req.files.upload.mimetype;
    console.log(temp);
     if(temp=="image/jpeg" || temp=="image/png" || temp=="application/msword" || temp=="audio/mpeg" || temp=="application/pdf" ){
        task.addFile(req.files, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

            }
        );
    }else{
        return (
                    res.json
                    ({
                        message:"File Format is not Allowed"
                    })
                )
    }
    

        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/:id', function (req, res, next) {

    task.deleteFile(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});
router.put('/:id', function (req, res, next) {

    try {
        //console.log(req)
         if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else  {
    if(req.files.upload.size>1010011){
        return(
            res.json
            ({
                message:"File Size is Large"
            })
        )
    }
    let temp=req.files.upload.mimetype;
    console.log(temp);
     if(temp=="image/jpeg" || temp=="image/png" || temp=="application/msword" || temp=="audio/mpeg" || temp=="application/pdf" ){
        task.updateFile(req.params.id,req.files, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

            }
        );
    }else{
        return (
                    res.json
                    ({
                        message:"File Format is not Allowed"
                    })
                )
    }
    

        }
    } catch (err) {
        res.status(500).send(err);
    }


});


module.exports = router;