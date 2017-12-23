module.exports = {
    detail: (req,res)=>{ 
        let user = req.session.loginUser;
        res.render('detail',{user})
    },
    index : (req,res)=>{
        let user = req.session.loginUser;
        res.render('index',{user})
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