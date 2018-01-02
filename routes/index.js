var express = require('express');
var router = express.Router();
let user = require('../controllers/user')
let common = require('../controllers/common')
let admin = require('../controllers/admin')
let websocket = require('../models/ws')

router.get('/detail',common.detail);
router.get('/logout',user.logout);
router.get('/blog',common.blog);
router.get('/admin',common.admin);
router.get('/blogType',admin.blogType);
/* GET home page. */
router.get('/', common.index);
router.get('/newBlog', admin.newblog);
router.get('/adminBlogs',admin.adminBlogs);
router.post('/addBlog',admin.addBlog);
router.post('/addBlogType',admin.addBlogType);
router.post('/checkLogin',user.checkLogin);
router.get('/ws',(req,res)=>{
    let user = req.session.loginUser;        
        res.render('websocket',{user})
})
module.exports = router;
