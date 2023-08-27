const express=require("express")

const {UserRegister,Userlogin,allUser}=require("../controllers/ControllerUser")
const { uploads } = require("../middleware/uploads")
const route =express.Router()


route.post("/user/register",uploads.single("image"),UserRegister)
route.post("/user/login",Userlogin)
route.get("/user",allUser)
module.exports=route;