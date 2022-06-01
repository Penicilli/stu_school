//创建连接池
const mysql=require('mysql')
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'20210505',
    database:'stu_mysql'
})
//暴露出去
module.exports=pool