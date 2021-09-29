const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req, res){
	res.send('Hello World!');
 });

 let users= [];
 

app.get('/users',(req, res) => {	
    res.send(users.map((item)=>(
      {id: item}
)));
});
//console.log(users.length);
app.post('/user',function(req,res){ 
	users.push(users.length);
  res.status(200).json({id: users[users.length-1]});
});

//get y devolver el id:0
app.get('/user/:id',function(req,res){
   
  res.send({id: Number(req.params.id)});
});

app.listen(3000,function(){console.log('server is listening')})
