let conn = require('../models/conn')
module.exports = {
    detail: (req,res)=>{ 
        let user = req.session.loginUser;
        res.render('detail',{user})
    },
    index : (req,res)=>{
        let user = req.session.loginUser;
        conn.query('select * from blog',[],(rows)=>{
            
                res.render('index',{user,rows})
            
        })
    },
    blog : (req,res)=>{
        let user = req.session.loginUser;
        res.render('blog',{user})
    },
    admin : (req,res)=>{
        let user = req.session.loginUser;
        res.render('adminindex',{user})
    },
    

}