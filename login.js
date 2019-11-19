const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var emailid=readline.question('Enter Email ID:');
var password=readline.question('Enter Password:');

var sql="select * from Account where emailid=? and password=?";
var data=[emailid,password]
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
	//console.log(result);
  if(err) throw err;
  else
  {
    if(result.length>0)
   console.log("Login Success");


var receiver=readline.question('Enter receiver=');
var subject=readline.question('Enter subject=');
var message=readline.question('Enter message=');

var sql ="insert into mail(sender,receiver,subject,message) values(?,?,?,?)"
var data=[emailid,receiver,subject,message]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
	if (err) throw err;
	else
		console.log("mail send Successfully..")
})

  }
})
