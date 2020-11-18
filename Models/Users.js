var db = require('../dbConnection'); //reference of dbconnection.js file

var Users = {

    addUser: function (user, callback) {
        return db.query('insert into users (`user_email`, `user_name`, `user_password`, `user_mb`) values(?,?,?,?)', [user.user_email, user.user_name, user.user_password, user.user_mb], callback);
    },
    updateUser: function (id, user, callback) {
        return db.query('update users set user_name=?,user_password=?,user_mb=? where user_email=?', [ user.user_name, user.user_password, user.user_mb, id], callback);
    },
    showUser: function (callback) {
        return db.query('select * from users', callback);
    },
    showUserByEmail: function (id,callback) {
        return db.query('select * from users where user_email=?',[id], callback);
    },
    deleteUser: function (id, callback) {
        return db.query('delete from users where user_email=?', [id], callback);
    },
    updateSession(id,session,callback){
        
        return db.query('update users set user_session=? where user_email=?', [ user.session, id], callback);
    }
}
module.exports = Users;