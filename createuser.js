const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');

var name=readline.question('Enter Employee Name:');
var emailid=readline.question('Enter Employee Mail ID:');
var password=readline.question('Enter Password:');

var sql="insert into Account(name,emailid,password) values(?,?,?)";
var data=[name,emailid,password]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
	if (err) throw err;
	else
		console.log("Data inserted successfully..");
})