var express = require('express');
var router = express.Router();
var user = require('../Models/Users');
/* GET users listing. */
router.get('/', function (req, res, next) {
  user.showUser(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
  //task.getAllTasks(function (err, rows) {

  //});
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

module.exports = router;