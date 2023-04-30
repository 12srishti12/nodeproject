const express = require('express')
const mongoose= require('mongoose')
const Product= require('./models/productModel')
const app = express()  

app.use(express.json()) //the raw data i put in json for to read it in postman
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("hello client")
})

app.get('/blog',(req,res)=>{
    res.send("hello nodemonnnnnnn i am learning")
})

app.get('/product',async(req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)

    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message})

    }
})

app.get('/product/:id',async(req,res)=>{
    try{
        const {id}= req.params;
        const product =await Product.findById(id);
        res.status(200).json(product)
    }catch{
        console.log(error);
        res.status(500).json({message:error.message})
    }
})
//updating a data by using id
app.put('/product/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const product= await Product.findByIdAndUpdate(id,req.body);
        
        if(!product){
            return res.status(404).json({message:`product is not found with ID ${id}`})
        }
        const updatedproduct= await Product.findById(id)
        res.status(200).json(updatedproduct);

    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.post('/product',async(req,res)=>{
    try{
        const product= await Product.create(req.body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})


mongoose.
connect('mongodb+srv://root:1234@devapi.wdqpriv.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to mongo");
    app.listen(3000,()=>{
        console.log("Node api")
    })

}).catch((error)=>{
    console.log(error)
})


// username -root
//password-1234
//cluster name-> devapi