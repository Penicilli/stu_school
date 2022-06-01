//创建web服务器app
const express=require('express')
const app=express()
//设置端口为3000
app.listen(3000,()=>{
    console.log('学校web服务器启动成功,端口为3000')
})