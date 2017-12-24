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
        blogModel.queryAllTypes(user.userId,(rows)=>{
            let types=rows;
            res.render('newblog',{user,types})
        })
    },
    adminBlogs:(req,res)=>{
        let user = req.session.loginUser;  
        blogModel.queryBlogs(user.userId,(rows)=>{
                let blogs=rows;
                res.render('adminBlogs',{user,blogs})
        });      
        
    },
    addBlog:(req,res)=>{
        let title=req.body.title;
        let content=req.body.content;
        let typeId=req.body.type_id;
        let user = req.session.loginUser;  
        console.log(title,typeId,user.userId,content)
       blogModel.saveBlog(title,typeId,content,user.userId,(rows)=>{
            if(rows.affectedRows>0){
                res.redirect('/adminBlogs')
            }else{
                res.redirect('/newBlog')
            }
       })
        
    },
}