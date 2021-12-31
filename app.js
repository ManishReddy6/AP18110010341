
const express = require('express');
const app=express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res) {
  res.render('home');
});

app.get('/homePage',function(req,res) {
  res.render('homePage');
});

function validate(pass)
{
  let c1=0,c2=0;
  for(var i in pass)
  {
    if(pass[i]=='@' || (pass[i]>='A' && pass[i]<='Z') || (pass[i]>='a' && pass[i]<='z') || (pass[i]>='0' && pass[i]<='9'))
    {
      if(pass[i]>='A' && pass[i]<='Z')
      {
        c1=1;
      }
      if(pass[i]>='0' && pass[i]<='9')
      {
        c2=1;
      }
    }
    else
    {
      return 0;
    } 
  }
  if(c1==1 && c2==1)
  {
    return 1;
  }
  return 0;
}

app.post('/', (req,res)=>{
  const username=req.body.email;
  const pass=req.body.password;
  var format=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(format.test(username) && validate(pass)==1 && pass==="SmartServTest@123" )
  {
  	res.redirect('/homePage');
  }
  else
  {
    res.redirect('/');  
  }
});

let port=process.env.PORT || 5050;
app.listen(port,()=>{
  console.log('Running at port 5050');
});