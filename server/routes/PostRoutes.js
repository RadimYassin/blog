const express=require("express")

const {getAllPosts,CreatePost,SearchByType}=require("../controllers/ControllerPost")
const Route=express.Router()
const {isAuth}=require("../middleware/auth")
Route.get("/",getAllPosts)
Route.post("/CreatePost",isAuth,CreatePost)
Route.get("/search",SearchByType)
// Route.get("/post/:id",getPost)
// Route.delete("/post/:id",deleteOne)
// Route.get("/Profile",getPostsForUser)

module.exports=Route