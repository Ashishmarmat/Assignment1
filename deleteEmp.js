const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');

var emailid=readline.question('Enter emailid:');
var password=readline.question('Enter password:')

var sql="select * from Account where emailid=? and password=?";
var data=[emailid,password]
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
if(err) throw err;
   else
  if(result.length>0)
      {
console.log("login successfully..");

var sql="select * from mail where Receiver=?";
var data=[emailid]
var sql=mysql.format(sql,data);

con.query(sql,(err,result)=>{
	if(err) throw err;
	else{
		console.log(result);
		var command=readline.question('Do you really want to delete all mails from inbox..(Y/N)')
		if(command=='y')
		 {
			var sql="delete from mail where Receiver=?";
			var data=[emailid]
			var sql=mysql.format(sql,data);
			con.query(sql,(err)=>{
				if(err) throw err;
				else{
				 console.log("Mail deleted..")
			
                    } 
              }}
              else{
	            console.log("Mail not deleted...");
             }
       }

			})
		}

})
else
console.log("Login failed..");
