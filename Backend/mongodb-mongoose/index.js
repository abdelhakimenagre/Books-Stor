const mongoose=require("mongoose");
const { now } =mongoose;
const { Schema,model } =mongoose;




const BookShema=new Schema({
   
    "title":String ,
    "author":String ,
    "description":String,
    "image": String,
    "available": Boolean,
    "createdAt": Date 
});

const  books=model("Books",BookShema);
const express=require("express");

const App=express();

mongoose.connect('mongodb://localhost:27017/Books').then(()=>{console.log("db connected")}).catch((err)=>{console.log(err)});
App.get("/",async(req,res)=>{
    const data= await books.find();
    res.json(data)
})
App.use(express.json());
App.post("/add",(req,res)=>{
   
   const {title,
    author,
    description,
    image,
    available,
    createdAt,
  }=req.body;
    const newbook=new books;
    newbook.title=title;
    newbook.author=author;
    newbook.description=description;
    newbook.image=image;
    newbook.available=available;
    newbook.createdAt=createdAt;
    newbook.save();
    res.json("the Book is availabe now")

    
})
App.listen(3001,()=>{
    console.log("is ok")
})
