let blogModel = require('../models/blogModel')
module.exports = {
    blogType : (req,res)=>{
        let user = req.session.loginUser;        
        blogModel.queryAllTypes(user.userId,(rows)=>{
            let types=rows;
            res.render('blogType',{user,types})
        })
    },
    addBlogType : (req,res)=>{
        let typeName=req.body.typeName;
        let user = req.session.loginUser;
        console.log(typeName)
        blogModel.saveType(typeName,user.userId,(rows)=>{
            if(rows.affectedRows>0){
                res.redirect('/blogType');
            }else{
                res.redirect('/addBlogType');
            }
        });        
        
    },
    newblog:(req,res)=>{
        let user = req.session.loginUser;        
            res.render("newblog",{user});
    }
}