// 驗證node連接mysql

const mysql = require('mysql')

const connection =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'00000000',
    port:'3306',
    database:'temp0602'
})

// 連接
connection.connect()

var sql = 'SELECT * FROM test_tb1'

// query為執行sql語句的意思
connection.query(sql , (err , result) => { 
    console.log(result);
 })

 connection.end()