const express=require("express")
const mongoose =require('mongoose')
const cors=require('cors')
const Registermodel=require('./register')
const POST=8080

const app=express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: ["GET", "POST"], // Allowed HTTP methods
    credentials: true 
}
))

mongoose.connect('mongodb://localhost:27017/Ecommerce')

app.post('/login',(req,res)=>{
  const {email,password}=req.body;
  Registermodel.findOne({email: email})
  .then(user=>{
    if(user)
    {
        if(user.password===password)
        {
            res.json("success")
        }
        else{
            res.json("the password is incorrect")
        }
    }
    else{
        res.json("no user found");
    }
  })
})
app.post('/register',(req,res)=>{
    Registermodel.create(req.body)
    .then(register=>res.json(register))
    .catch(err=>res.json(err))

})

app.listen(8080,()=>{
    console.log("server start running")
})
