
const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');

var emailid=readline.question('Enter Employee Email ID:');
var cpassword=readline.question('Enter Current password:');
var npassword=readline.question('Enter New password:');


var sql="update Account set password=? where emailid=? and password=?";
var data=[npassword,emailid,cpassword]
var sql=mysql.format(sql,data);
console.log(sql)
con.query(sql,(err,result)=>{
	//console.log(result);
  if(err) throw err;
  else if(result.changedRows>0)
  console.log("password changed successfully...")
else 
console.log("Not Changed");
})
