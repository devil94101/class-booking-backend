var express=require('express')
var bodyParser=require('body-parser')

var app=express()
var cors=require('cors')
var routes=require('./routes/router')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use('/api',routes)
const PORT=process.env.PORT||5000;

app.use((req,res)=>{
    res.send("page not found");
})
app.listen(PORT,(err)=>{
    if(err)console.log(err)
    else{
        console.log("listening to port "+PORT);
    }
})

