//引入模块,创建路由器
const express=require('express')
const r=express.Router()
//引入连接池
const pool=require('../pool.js')

//添加路由(接口)(测试)
//1.学生注册接口
//接口地址:http://127.0.0.1:3000/v1/stu/reg
//请求方式:post
r.post('/reg',(req,res,next)=>{
    var obj=req.body
    if(!/^1[3-9]\d{9}$/.test(obj.phone)){
        res.send({code:401,msg:'手机格式错误'})
    }else{
        pool.query('insert into stu set ?',[obj],(err,r)=>{
             if(err){
                 next(err)
                 return
             }
             res.send({code:200,msg:'注册成功'})
       }) 
    }
})

//暴露路由器
module.exports=r