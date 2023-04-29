const express = require("express")
const app = express()  

app.get('/',(req,res)=>{
    res.send("hello client")
})

app.listen(3000,()=>{
    console.log("Node api")
})