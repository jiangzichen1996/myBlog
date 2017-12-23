var express = require('express');
var router = express.Router();
let user = require('../controllers/user')
let common = require('../controllers/common')
let blog = require('../controllers/blog')
router.get('/detail',common.detail);
router.get('/logout',common.logout);
/* GET home page. */
router.get('/', common.index);
router.post('/checkLogin',user.checkLogin)
module.exports = router;
