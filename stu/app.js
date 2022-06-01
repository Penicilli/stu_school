//创建web服务器app
const express=require('express')
const app=express()
//设置端口为3000
app.listen(3000,()=>{
    console.log('学校web服务器启动成功,端口为3000')
})
//引入自定义模块(自建路由器)
const stuR=require('./routes/stuRouter.js')


//中间件
app.use(express.urlencoded({
    extended:true
}))

//挂载路由器
app.use('/v1/stu',stuR)

//错误中间件
app.use((err,req,res,next)=>{
    console.log(err)
    res.send({code:500,msg:'服务器错误'})
})