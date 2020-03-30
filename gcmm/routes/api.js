var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host:"yoonjh238.iptime.org",
  port:63306,
  user : "root",
  password : "test",
  database :"test"
})

connection.connect();

/* GET users listing. */
router.get('/v1/:keyword', function(req, res, next) {
    console.log(req.params.keyword)
    var keyword = req.params.keyword;
  let obj = {};
  let query = connection.query("select * from COMMIT_CODE where CODE= " + mysql.escape(keyword) ,function(err,rows){
      if(err) throw err;
          if(rows.length){
            console.log("result ==> " , rows)
          
          }else{
              obj.result="0"
          }
          res.send(rows);
         
          // res.json(obj)
      })       

});


router.get('/v2/:keyword', function(req, res, next) {
  console.log(req.params.keyword)
  var keyword = req.params.keyword;
let obj = {};
let query = connection.query("SELECT * FROM COMMIT_CODE TAB1 LEFT OUTER JOIN COMMIT_EXAMPLE TAB2 ON TAB1.CODE = TAB2.CODE WHERE TAB1.CODE = " + mysql.escape(keyword) ,function(err,rows){
    if(err) throw err;
        if(rows.length){
          return res.send(rows);
        }else{
          return res.send(obj)
        }
        
        // res.json(obj)
    })       

});

module.exports = router;
