// 中間插件

var express = require('express')
var mysql = require('mysql')
var app = express()

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '00000000',
        port: '3306',
        database: 'temp0602'
    })
}


app.get('/query', (req, res) => {
    // 創建連接mysql的對象
    var connection = getConnection()
        // 連接
        connection.connect()
    var sql = 'SELECT * FROM test_tb1'

    // query為執行sql語句的意思
    connection.query(sql, (err, result) => {
        console.log(result);
        res.send(result)
    })
    // 關閉mysql
    connection.end()
})

app.get('/insert', (req, res) => {
    // 創建連接mysql的對象
    var connection = getConnection()
        // 連接
        connection.connect()
    console.log(req.query.title , req.query.job);
    // req.query獲取參數
    var sql = ` INSERT INTO test_tb1 (user_name , user_job) VALUES('${req.query.title}' , '${req.query.job}')`
    // query為執行sql語句的意思
    connection.query(sql, (err, result) => {
        res.send(true)
    })
    // 關閉mysql
    connection.end()
})

app.get('/delete', (req, res) => {
    // 創建連接mysql的對象
    var connection = getConnection()
        // 連接
        connection.connect()
    // req.query獲取參數
    var sql = ` DELETE FROM test_tb1 WHERE user_id=${req.query.id}`
    // query為執行sql語句的意思
    connection.query(sql, (err, result) => {
        res.send(true)
    })
    // 關閉mysql
    connection.end()
})

app.get('/search', (req, res) => {
    // 創建連接mysql的對象
    var connection = getConnection()
        // 連接
        connection.connect()
    // req.query獲取參數
    console.log(req.query.search_Key);
    var sql = ` SELECT user_name , user_job FROM test_tb1 WHERE user_name LIKE "%${req.query.search_Key}%"`
    // query為執行sql語句的意思
    connection.query(sql, (err, result) => {
        res.send(result)
    })
    // 關閉mysql
    connection.end()
})

// 修改
app.get('/modify', (req, res) => {
    // 創建連接mysql的對象
    var connection = getConnection()
        // 連接
        connection.connect()
    // req.query獲取參數
    const id = req.query.modifyId
    const job = req.query.modifyJob
    console.log(req.query.modifyId);

    var sql = ` UPDATE test_tb1 SET user_job='${job}' WHERE user_id=${id}`
    console.log(job , id);
    console.log(sql);
    // query為執行sql語句的意思
    connection.query(sql, (err, result) => {
        res.send(true)
    })
    // 關閉mysql
    connection.end()
})
app.listen(3000, () => {
    console.log('server is opening');
})