
const express = require('express');
const app=express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

app.get('/home',function(req,res) {
  res.render('home');
});

app.get('/homePage',function(req,res) {
  res.render('homePage');
});


app.post('/home', (req,res)=>{
  const username=req.body.email;
  const pass=req.body.password;
  var format=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(format.test(username) && pass==="SmartServTest@123" )
  {
  	res.redirect('/homePage')
  }
  else
  {
  	res.render('home');	
  }
});

app.listen('5050',()=>{
  console.log('Running at port 5050');
});