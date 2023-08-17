require('dotenv').config()
const express=require("express");

const mongose=require("mongoose");
const bodyParser=require("body-parser");
const PostRoutes=require("./routes/PostRoutes");
const UserRoutes=require("./routes/UserRoutes");
const CommentRoutes=require("./routes/CommentRoutes");
const cors = require('cors');


const app=express()




app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(bodyParser.json());
app.use("/api",PostRoutes);
app.use("/api",UserRoutes);
app.use("/api",CommentRoutes);
// connect the db 
mongose.connect(process.env.DB_URL).then(()=>{
app.listen(4000,()=>{
    console.log("4000 listen");
})


})


