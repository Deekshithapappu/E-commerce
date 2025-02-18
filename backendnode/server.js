const express=require('express');
const mysql=require('mysql');
const cors=require('cors')

const app=express()
app.use(express.json());
app.use(cors())

const db=mysql.createPool({
    host:"localhost",
    user: 'system',
    password:'password',
    database:'Signin'
})
app.post('/login',(req,res)=>{
    const sql='SELECT * from login where email=? and password=?'
    const values=[
        req.body.email,
        req.body.password
    ]
    db.query(sql, values, (err, data) => {  
        if (err) {
            console.error(err);  
            return res.status(500).json({ error: "Login failed" });
        }
        if (data.length > 0) {
            return res.json({ message: "Login successful", user: data[0] });
        } else {
            return res.status(401).json({ error: "Invalid email or password" });
        }
    });
})

app.listen(8081,()=>{
    console.log("listening");
})