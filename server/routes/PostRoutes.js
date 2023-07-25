const express=require("express")

const {getAllPosts,CreatePost,SearchByType}=require("../controllers/ControllerPost")
const Route=express.Router()

Route.get("/",getAllPosts)
Route.post("/CreatePost",CreatePost)
Route.get("/search",SearchByType)
// Route.get("/post/:id",getPost)
// Route.delete("/post/:id",deleteOne)
// Route.get("/Profile",getPostsForUser)

module.exports=Route