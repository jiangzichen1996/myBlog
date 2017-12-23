var express = require('express');
var router = express.Router();
let user = require('../controllers/user')
let common = require('../controllers/common')
let blog = require('../controllers/blog')
let admin = require('../controllers/admin')

router.get('/detail',common.detail);
router.get('/logout',user.logout);
router.get('/blog',common.blog);
router.get('/admin',common.admin);
router.get('/blogType',admin.blogType);
/* GET home page. */
router.get('/', common.index);
router.get('/newBlog', admin.newblog);
router.post('/addBlogType',admin.addBlogType);
router.post('/checkLogin',user.checkLogin);
module.exports = router;
