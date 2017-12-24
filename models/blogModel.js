let conn = require('./conn')
module.exports = {
    queryAllTypes:(userId,callback)=>{
        let sql = "select * from blog_type where userId=?";
        conn.query(sql,[userId],callback);
    },
    saveType:(typeName,userId,callback)=>{
        let sql="insert into blog_type(type_name,userId) values(?,?)";
        conn.query(sql,[typeName,userId],callback);
    },
    queryBlogs:(userId,callback)=>{
        let sql="select * from blog where author=?";
        conn.query(sql,[userId],callback);
    },
    saveBlog:(title,typeId,content,userId,callback)=>{
        let sql="insert into blog(title,author,content,type_id) values(?,?,?,?)";
        conn.query(sql,[title,userId,content,typeId],callback);
    }
} 