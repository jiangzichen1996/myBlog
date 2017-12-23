let mysql= require('mysql');
let connection= mysql.createConnection({
      host :'localhost',
      user: 'root',
      password: '',
      database: 'myBlog'
    })
exports.query=(sql,callback)=>{
    connection.connect();
    connection.query(sql,function(err,rows){
        if(err)throw err;
      callback(rows);
      connection.end();
    })
}