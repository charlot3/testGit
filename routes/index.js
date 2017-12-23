var express = require('express');
var websocket = require('socket.io');
var router = express.Router();

/* GET home page. */


class BaseResult{
    constructor(code,msg,data){
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    setCode(code){
        this.code = code;
    }
    getCode(){
        return this.code;
    }
    setMsg(msg){
        this.msg = msg;
    }
    getMsg(){
        return this.msg;
    }
    setData(data){
        this.data = data;
    }
    getData(){
        return this.data;
    }
    getRes(){
        return {'code':this.code,'msg':this.msg,'data':this.data};
    }
}

const success = new BaseResult(0,'成功',{a:10,b:[{c:10,d:20},{e:30,f:40}]});
//console.log(SUCCESS);





router.get('/', function(req, res, next) {
    res.render('index', { title: 'Expressing OK' , success : success.getCode()});
});

module.exports = router;