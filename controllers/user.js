let userModel = require('../models/userModel')

module.exports = {
    logout : (req,res)=>{
        req.session.loginUser=null;
        console.log(req.session.loginUser);
        res.redirect('/')
    },
    checkLogin : (req,res)=>{
        let userName= req.body.userName;
        let userPwd= req.body.userPwd;
        userModel.queryByNameAndPwd(userName,userPwd,rows=>{
            if(rows.length>0){
                let user = rows[0];
                req.session.loginUser = user;
                res.redirect('/');
              }else{
                  alert('请输入正确的用户名和密码')
                res.redirect('/');
              }
          
        });
    
    }
    
}