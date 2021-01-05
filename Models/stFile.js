var db=require('../dbconnection');
var fs = require('fs');
var FileS={
    getAllfiles:function(callback){
        return db.query("select * from file",callback);
    },
    getfileById: function (id,callback) {
        return db.query('select * from file where Id=?',[id], callback);
    },
 
    deleteFile:function(Files,callback){
        let path='./public/files/'+Files;
        try {
            fs.unlinkSync(path)
            //file removed
        } catch(err) {
            console.error(err)
        }
        /* if(Files!=''){
            fs.unlink(path,function(err){
            if(err){
                console.log(err);
            }
            console.log('Deleted successfuly')});
        } */
            
        return db.query("delete from file where fileName=?",[Files],callback);
    },
 
    addFile:function(Files,callback){

        
        var dt=new Date();//current date and time of server
        var text = "";//random text
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        console.log(Files)

        //Use the name of the input field (i.e. "upload") to retrieve the uploaded file
        let avatar = Files.upload;
        var extension = avatar.name;
        extension = extension.replace(" ","");
        var fName=text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+"-"+extension
        var path="./public/files/"+fName;
    
        var path1="/files/"+fName;
        console.log(avatar.mimetype);
        //Use the mv() method to place the file in upload directory (i.e. "uploads")
        avatar.mv(path);
        return db.query('insert into file (`fileName`,`filePath`,`fileSize`) values(?,?,?)', [fName,path1,avatar.size,], callback);
    }
};
 
module.exports=FileS;