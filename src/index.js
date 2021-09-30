const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());


// --------------- rama 1 -----------------------------------------

app.get('/',function(req, res){
	res.send('Hello World!');
 });

 
// --------------- rama 2 -----------------------------------------

 let users= [];
 
app.get('/users',(req, res) => {	
    res.send(users.map((item)=>(
      {id: item}
)));
});


// --------------- rama 3 -----------------------------------------

app.post('/user',function(req,res){ 
	users.push(users.length);
  res.status(200).json({id: users[users.length-1]});
});

//get y devolver el id:0
app.get('/user/:id',function(req,res){
  res.send({id: Number(req.params.id)});
});


// --------------- rama 4-----------------------------------------

app.delete('/user/:id',function(req,res){
  if (users.length !== 0) {
    //si se encuentra -- eliminar y retornar el usuario y el estado 202
    users.pop();
    res.sendStatus(202).json(users);
   }
 else{
     //no se encuentra responder estado 204
     res.sendStatus(204).json(users); //sendstatus
    }
});

app.listen(3000,function(){console.log('server is listening')})
