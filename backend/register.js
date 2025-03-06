const mongoose =require('mongoose')
const RegisterSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String
},{ versionKey: false })

const Registermodel=mongoose.model("register",RegisterSchema)
module.exports=Registermodel