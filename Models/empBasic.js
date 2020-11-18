var db = require('../dbConnection'); //reference of dbconnection.js file
var d=new Date();
var current_time=d.toJSON();
var empProfile = {
    getEmpDetails: function (callback) {
        db.query('select * from emp_basic_details', callback);
    },
    getEmpDetById: function (id,callback) {
        db.query('select * from emp_basic_details where emp_id=? or oemail=?',[id,id], callback);
    },
    addEmpBasic: function (emp, callback) {
        return db.query('INSERT INTO `emp_basic_details` (`f_name`, `gender`, `dob`, `ophone`, `phone1`, `fax`, `oemail`, `pemail`, `photo`)  values(?,?,?,?,?,?,?,?,?)', [emp.f_name+' '+emp.m_name+' '+emp.l_name, emp.gender, emp.dob,emp.ophone,emp.phone1,emp.fax,emp.oemail,emp.pemail,emp.photo], callback);
    },
    deleteEmp_Basic: function (id, callback) {
        /* db.query('delete from emp_personal_details where emp_id=?', [id], callback)
        if(db.query('select emp_id from emp_skill_details where emp_id=?', [id], callback)!=''){
            
        db.query('delete from emp_skill_details where emp_id=?', [id], callback)
        }
        if(db.query('select emp_id from emp_exp_details where emp_id=?', [id], callback)!=''){
            
        db.query('delete from emp_exp_details where emp_id=?', [id], callback)
        }
        if(db.query('select emp_id from emp_edu_details where emp_id=?', [id], callback)!=''){
            
        db.query('delete from emp_edu_details where emp_id=?', [id], callback)
        }
        if(db.query('select emp_id from emp_address_details where emp_id=?', [id], callback)!=''){
            
        db.query('delete from emp_address_details where emp_id=?', [id], callback)
        }
        if(db.query('select emp_id from emp_bank_details where emp_id=?', [id], callback)!=''){
        db.query('delete from emp_bank_details where emp_id=?', [id], callback)
        } */
        return (
            db.query('delete from emp_basic_details where emp_id=?', [id], callback)
            )
    },
    updateEmpBasic: function (id, emp, callback) {
        return db.query('update emp_basic_details set `f_name`=?, `gender`=?, `dob`=?, `ophone`=?, `phone1`=?, `fax`=?, `oemail`=?, `pemail`=?, `photo`=? where emp_id=?', [ emp.f_name+' '+emp.m_name+' '+emp.l_name, emp.gender, emp.dob,emp.ophone,emp.phone1,emp.fax,emp.oemail,emp.pemail,emp.photo, id], callback);
    },
    getEmppersonal: function (callback) {
        db.query('select * from emp_personal_details', callback);
    },
    getEmppersonById: function (id,callback) {
        db.query('select * from emp_personal_details where emp_id=?',[id], callback);
    },
    addEmpPersonal: function (emp, callback) {
        return db.query('INSERT INTO `emp_personal_details`(`emp_id`, `birth_place`, `religion`, `caste`, `domicile`, `nationality`, `voter_id`, `pan_card`, `adhar_card`, `maritual_status`, `children`, `marriage_date`, `spouse_name`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)', [
            emp.emp_id, emp.birth_place, emp.religion, emp.caste,emp.domicile,emp.nationality,emp.voter_id,emp.pan_card,emp.adhar_card,emp.maritual_status,emp.children,emp.marriage_date,emp.spouse_name], callback);
    },
    deleteEmp_Personal: function (id, callback) {
        return db.query('delete from emp_personal_details where emp_id=?', [id], callback);
    },
    updateEmpPersonal: function (id, emp, callback) {
        return db.query(
            'update emp_personal_details set `birth_place`=?, `religion`=?, `caste`=?, `domicile`=?, `nationality`=?, `voter_id`=?, `pan_card`=?, `adhar_card`=?, `maritual_status`=?, `children`=?, `marriage_date`=?, `spouse_name`=? where emp_id=?',
             [ 
                emp.birth_place, 
                emp.religion, 
                emp.caste,
                emp.domicile,
                emp.nationality,
                emp.voter_id,
                emp.pan_card,
                emp.adhar_card,
                emp.maritual_status,
                emp.children,
                emp.marriage_date,
                emp.spouse_name, 
                id
            ], callback);
    },
    getEmpBank: function (callback) {
        db.query('select * from emp_bank_details', callback);
    },
    getEmpBankById: function (id,callback) {
        db.query('select * from emp_bank_details where emp_id=?',[id], callback);
    },
    addEmpBank: function (emp, callback) {
        return db.query('INSERT INTO `emp_bank_details`(`emp_id`, `bank_name`, `acc_type`, `acc_no`, `pay_type`, `branch_det`, `ifsc`, `rbank_name`, `racc_no`) VALUES(?,?,?,?,?,?,?,?,?)',
         [
            emp.emp_id,
            emp.bank_name, 
            emp.acc_type, 
            emp.acc_no,
            emp.pay_type,
            emp.branch_det,
            emp.ifsc,
            emp.rbank_name,
            emp.racc_no
            ], callback);
    },
    deleteEmp_Bank: function (id, callback) {
        return db.query('delete from emp_bank_details where emp_id=?', [id], callback);
    },
    updateEmpBank: function (id, emp, callback) {
        return db.query(
            'update emp_bank_details set `bank_name`=?, `acc_type`=?, `acc_no`=?, `pay_type`=?, `branch_det`=?, `ifsc`=?, `rbank_name`=?, `racc_no`=? where emp_id=?',
             [  
                emp.bank_name, 
                emp.acc_type, 
                emp.acc_no,
                emp.pay_type,
                emp.branch_det,
                emp.ifsc,
                emp.rbank_name,
                emp.racc_no,
                id
            ], callback);
    },
    getEmpaddress: function (callback) {
        db.query('select * from emp_address_details', callback);
    },
    getEmpaddressById: function (id,callback) {
        db.query('select * from emp_address_details where emp_id=?',[id], callback);
    },
    addEmpaddress: function (emp, callback) {
        return db.query('INSERT INTO `emp_address_details` VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        //return db.query('INSERT INTO `emp_address_details`(`emp_id`, `add_line1`, `add_line2`, `add_country`, `add_state`, `add_district`, `add_city`, `add_pincode`, `padd_line1`, `padd_line2`, `padd_country`, `padd_state`, `padd_district`, `padd_city`, `padd_pincode`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
         [
           emp.emp_id,
           emp.add_line1,
           emp.add_line2,
           emp.add_country,
           emp.add_state,
           emp.add_district,
           emp.add_city,
           emp.add_pincode,
           emp.padd_line1,
           emp.padd_line2,
           emp.padd_country,
           emp.padd_state,
           emp.padd_district,
           emp.padd_city,
           emp.padd_pincode,
           current_time
        ], callback);
    },
    deleteEmp_address: function (id, callback) {
        return db.query('delete from emp_address_details where emp_id=?', [id], callback);
    },
    updateEmpaddress: function (id, emp, callback) {
        return db.query('update emp_address_details set `add_line1`=?, `add_line2`=?, `add_country`=?, `add_state`=?, `add_district`=?, `add_city`=?, `add_pincode`=?, `padd_line1`=?, `padd_line2`=?, `padd_country`=?, `padd_state`=?, `padd_district`=?, `padd_city`=?, `padd_pincode`=? where emp_id=?',
         [
            emp.add_line1,
            emp.add_line2,
            emp.add_country,
            emp.add_state,
            emp.add_district,
            emp.add_city,
            emp.add_pincode,
            emp.padd_line1,
            emp.padd_line2,
            emp.padd_country,
            emp.padd_state,
            emp.padd_district,
            emp.padd_city,
            emp.padd_pincode,
            id], callback);
    },
    getEmpedu: function (callback) {
        db.query('select * from emp_edu_details', callback);
    },
    getEmpeduById: function (id,callback) {
        db.query('select * from emp_edu_details where emp_id=?',[id], callback);
    },
    addEmpedu: function (emp, callback) {
        return db.query('INSERT INTO `emp_edu_details` VALUES(?,?,?,?,?,?)', [
            emp.emp_id,
            emp.institution,
            emp.passing_year,
            emp.score,
            emp.qua_area,
            current_time
        ], callback);
    },
    deleteEmp_edu: function (id, callback) {
        return db.query('delete from emp_edu_details where emp_id=?', [id], callback);
    },
    updateEmpedu: function (id, emp, callback) {
        return db.query('update emp_edu_details set `emp_id`=?,`institution`=?,`passing_year`=?,`score`=?,`qua_area`=? where emp_id=?', [ 
            emp.institution,
            emp.passing_year,
            emp.score,
            emp.qua_area,
            id], callback);
    },
    getEmpexp: function (callback) {
        db.query('select * from emp_exp_details', callback);
    },
    getEmpexpById: function (id,callback) {
        db.query('select * from emp_exp_details where emp_id=?',[id], callback);
    },
    addEmpexp: function (emp, callback) {
        return db.query('INSERT INTO `emp_exp_details` VALUES(?,?,?,?,?,?,?,?)',
        [
            emp.emp_id,
            emp.from_date,
            emp.to_date,
            emp.company,
            emp.destignation,
            emp.r_date,
            emp.nr_date,
            current_time
            ], callback);
    },
    deleteEmp_exp: function (id, callback) {
        return db.query('delete from emp_exp_details where emp_id=?', [id], callback);
    },
    updateEmpexp: function (id, emp, callback) {
        return db.query('update emp_exp_details set `from_date`=?, `to_date`=?, `company`=?, `designation`=?, `r_date`=?, `nr_date`',
        [
            emp.from_date,
            emp.to_date,
            emp.company,
            emp.destignation,
            emp.r_date,
            emp.nr_date,
             id], callback);
    },
    getEmpskill: function (callback) {
        db.query('select * from emp_skill_details', callback);
    },
    getEmpskillById: function (id,callback) {
        db.query('select * from emp_skill_details where emp_id=?',[id], callback);
    },
    addEmpskill: function (emp, callback) {
        return db.query('INSERT INTO `emp_skill_details` (`emp_id`, `skill_cat`, `skill`, `skill_level`, `is_current`, `exper`, `remarks`, `date_modified`) VALUES(?,?,?,?,?,?,?,?)', [
            emp.emp_id,
            emp.skill_cat,
            emp.skill,
            emp.skill_level,
            emp.is_current,
            emp.exper,
            emp.remarks,
            current_time
        ], callback);
    },
    deleteEmp_skill: function (id, callback) {
        return db.query('delete from emp_skill_details where emp_id=?', [id], callback);
    },
    updateEmpskill: function (id, emp, callback) {
        return db.query('update emp_skill_details set `skill_cat`=?, `skill`=?, `skill_level`=?, `is_current`=?, `exper`=?, `remarks` where emp_id=?',
        [
            emp.skill_cat,
            emp.skill,
            emp.skill_level,
            emp.is_current,
            emp.exper,
            emp.remarks,
            id], callback);
    },
    /* 
    addEmpAddress: function (emp, callback) {
        return db.query('insert into emp_list values(?,?,?,?)', [emp.id, emp.emp_name, emp.emp_desc, emp.emp_price], callback);
    },
    addEmpEdu: function (emp, callback) {
        return db.query('insert into emp_list values(?,?,?,?)', [emp.id, emp.emp_name, emp.emp_desc, emp.emp_price], callback);
    },
    addEmpSkill: function (emp, callback) {
        return db.query('insert into emp_list values(?,?,?,?)', [emp.id, emp.emp_name, emp.emp_desc, emp.emp_price], callback);
    },
    addEmpExp: function (emp, callback) {
        return db.query('insert into emp_list values(?,?,?,?)', [emp.id, emp.emp_name, emp.emp_desc, emp.emp_price], callback);
    }, */
    
}

module.exports = empProfile;