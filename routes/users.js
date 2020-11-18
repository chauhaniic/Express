var express = require('express');
var router = express.Router();
var user = require('../Models/Users');
/* GET users listing. */
router.get('/:id?', function (req, res, next) {
  if (req.params.id) {

    user.showUserByEmail(req.params.id, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
}
else{
  user.showUser(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });}
});
router.post('/', function (req, res, next) {
  user.addUser(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete('/:id', function (req, res, next) {
  user.deleteUser(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.put('/:id', function (req, res, next) {

  user.updateUser(req.params.id, req.body, function (err, rows) {
      if (err) {
          res.json(err);
      }
      else {
          res.json(rows);
      }
  });

});

module.exports = router;