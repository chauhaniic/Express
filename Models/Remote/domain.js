var db = require('../../dbConnection'); //reference of dbconnection.js file

var Domain={
    getDomainDet:function (callback){
        db.query('select d.*,t.* from rate_manager.domain d left join rate_manager.tool_usage_type t on t.tool_usage_type_id=d.tool_usage_type_id', callback); 
        //db.query('select * from domain', callback);        
    },
    getDomainDetById: function (id,callback) {
        db.query('select d.*, (select json_array(json_objectagg(t.tool_usage_type_id,t.name)) from rate_manager.tool_usage_type t where t.tool_usage_type_id=d.tool_usage_type_id group by tool_usage_type_id)as nestedData from rate_manager.domain d where d.domain_id=?;',[id], callback);
    }, 
    addDomain: function (domain, callback) {
        return db.query('insert into domain (`domain_id`,`tool_usage_type_id`,`name`,`deleted_ind`,`create_by`,`modified_by`) values(domain_id=?,tool_usage_type_id=?,name=?,deleted_int=?,create_by=?,modified_by=?)', 
        [
            domain.domain_id, domain.tool_usage_type_id, domain.name, domain.delete_ind,domain.create_by,domain.modified_by
        ], callback);
    },
    deleteDomain: function (id, callback) {
        return db.query('delete from domain where domain_id=?', [id], callback);
    },
    updateDomain: function (id,domain, callback) {
        id=Number(id)
        return db.query('update domain set name=?,modified_by=?, where domain_id=?', [ domain.name, domain.modified_by,id], callback);
    }
}

module.exports = Domain;