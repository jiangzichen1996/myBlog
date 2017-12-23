
let mysql = require('mysql');
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myBlog'
})
exports.query = (sql,param, callback) => {
    pool.getConnection((err,connection)=>{
        connection.query(sql,param, function (err, rows) {
            if (err) throw err;
            callback(rows);
        })
    });
}