var express = require('express');
var websocket = require('socket.io');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {  job: 'I love you' });
});

module.exports = router;
