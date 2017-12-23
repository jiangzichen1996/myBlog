module.exports = {
    detail: (req,res)=>{ 
        let user = req.session.loginUser;
        res.render('detail',{user})
    },
    index : (req,res)=>{
        let user = req.session.loginUser;
        res.render('index',{user})
    },
    logout : (req,res)=>{
        req.session.loginUser=null;
        console.log(req.session.loginUser);
        
        res.redirect('/')
    }
}