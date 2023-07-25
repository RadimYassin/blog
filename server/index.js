const express=require("express")
const mongose=require("mongoose")
const bodyParser=require("body-parser")
const PostRoutes=require("./routes/PostRoutes")
const UserRoutes=require("./routes/UserRoutes")
const cors = require('cors');


const app=express()
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use("/api",PostRoutes);
app.use("/api",UserRoutes);
// connect the db 
mongose.connect("mongodb+srv://radim:12345@cluster0.dtfdcof.mongodb.net/Blog").then(()=>{
app.listen(4000,()=>{
    console.log("4000 listen");
})


})


