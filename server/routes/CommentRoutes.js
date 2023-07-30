const express=require("express")

const {AddComment,delComment}=require("../controllers/ControllerComments")
const Route=express.Router()
const {isAuth}=require("../middleware/auth")


Route.post("/comment",isAuth,AddComment)
Route.delete("/comment/:id",isAuth,delComment)



module.exports=Route