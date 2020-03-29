var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host:"192.168.0.27",
  port:3306,
  user : "root",
  password : "test",
  database :"test"
})


/* GET users listing. */
router.get('/v1/:keyword', function(req, res, next) {
    console.log(" movie / get ")
  let obj = {};
  let query = connection.query("select * from COMMIT_CODE",function(err,rows){
      if(err) throw err;
          if(rows.length){
            console.log("result ==> " , rows)
          }else{
              obj.result="0"
          }
          res.send(rows);
         
          // res.json(obj)
      })       
 // res.send('respond with a resource' );
});

module.exports = router;
