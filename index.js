const express = require("express")
const mongoose =require("mongoose");
const product=require("./models/model.js");
const Product = require("./models/model.js");

const app =express()

app.use(express.json());




app.get('/', (req, res)=>{
  res.send('hello from node API manish yadav');
});

app.post('/api/products',async (req,res)=>{
  try{
      const product = await Product.create(req.baby);
      res.sendStatus(200).json(product);
  }
  catch(error){
    res.sendStatus(500).json({message: error.message});
  }
})
// app.post('/api/products',(req,res)=>{
//   console.log(req.body);
//   res.send("req.body");
// });


mongoose.connect("mongodb+srv://manishyadav17092002:Bijendra%401709@backenddb.csulyz1.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
  console.log("connected to databases!");
  app.listen(3000, () =>{
    console.log('server runnning on port 3000')
  });
})
.catch(()=>{
  console.log("connection failed!");
});