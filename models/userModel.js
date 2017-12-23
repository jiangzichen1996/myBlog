let conn = require('./conn');

exports.queryByNameAndPwd = (userName,userPwd,callback)=>{    
    let sql="select * from user where userName=? and userPwd=?";
    conn.query(sql,[userName,userPwd],callback)
}
exports.queryByEmail = (email,callback)=>{    
    let sql="select * from user where email='"+email+"'";
    conn.query(sql,[email],callback)
}
exports.queryAll = (callback)=>{    
    let sql="select * from user";
    conn.query(sql,[],callback)
}
exports.save = (userName,userPwd,email,tel,callback)=>{    
    let sql=`insert into user(userName,userPwd,email,tel) values('${userName}',${userPwd},'${email}',${tel})`;
    conn.query(sql,[],callback);
}

