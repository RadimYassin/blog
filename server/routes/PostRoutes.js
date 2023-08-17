const express=require("express")

const {getAllPosts,CreatePost,SelectPost,likePost}=require("../controllers/ControllerPost")
const Route=express.Router()


const {isAuth}=require("../middleware/auth")
const { uploads } = require("../middleware/uploads")
Route.get("/",getAllPosts)
Route.post("/CreatePost",isAuth,uploads.single("image"),CreatePost)
Route.get("/post/:id",SelectPost)
Route.post("/post/:id",isAuth,likePost)
// Route.get("/Profile",getPostsForUser)

module.exports=Route