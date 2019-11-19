const mysql=require('mysql')

var con=mysql.createConnection({
	'host':'localhost',
	'port':'3307',
	'user':'root',
	'password':'root',
	'database':'AssignmentDB'
})
module.exports=con;
/*con.connect((err)=>{
	if(err)throw err;
	else
		console.log("MySQL Connected Succesfully")
})*/
