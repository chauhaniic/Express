var db = require('../dbConnection'); //reference of dbconnection.js file

var Users = {

    addUser: function (user, callback) {
        return db.query('insert into users values(?,?,?,?)', [user.user_email, user.user_name, user.user_password, user.user_mb], callback);
    },
    showUser: function (callback) {
        return db.query('select * from users', callback);
    },
    deleteUser: function (id, callback) {
        return db.query('delete from users where user_email=?', [id], callback);
    }
}
module.exports = Users;