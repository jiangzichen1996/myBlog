let userModel = require('../models/userModel')

exports.checkLogin= (req,res)=>{
    let userName= req.body.userName;
    let userPwd= req.body.userPwd;
    userModel.queryByNameAndPwd(userName,userPwd,rows=>{
        if(rows.length>0){
            let user = rows[0];
            req.session.loginUser = user;
            console.log("会话开始"+req.session.loginUser)
            res.redirect('/');
          }else{
              alert('请输入正确的用户名和密码')
            res.redirect('/');
          }
      
    });

}