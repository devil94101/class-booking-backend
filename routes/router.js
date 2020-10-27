var express=require('express')
const router=express.Router()
var nodemailer = require("nodemailer");


var mailer=nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    transportMethod: 'SMTP',
    auth: {
        user: "deepakpaliwal029@gmail.com",
        pass: "Deepak@94101"
    }, tls:{
        rejectUnauthorized:false
    }
});
router.get('/',(req,res)=>{
    res.send("hello world");
})

router.post('/submit',(req,res)=>{
    const t=new Date(parseInt(req.body.slot))
    const date=t.toLocaleDateString()
    const time=t.toLocaleTimeString();
    console.log(date)
    var mail = {
        from: "deepakpaliwal029@gmail.com",
        to: req.body.Email,
        subject: "NotchUp Trial Class Booked successfully",
        text: `Dear ${req.body.pName}
        ${req.body.cName}'s class at ${date} ${time} has been successfully booked.`,
        html: ""
    }
    
    mailer.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: ");
        }
        mailer.close();
        res.send({
            status:"success"
        })
    });
})

module.exports=router