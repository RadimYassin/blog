const express=require("express")

const {UserRegister,Userlogin,allUser}=require("../controllers/ControllerUser")
const route =express.Router()


route.post("/user/register",UserRegister)
route.post("/user/login",Userlogin)
route.get("/user",allUser)
module.exports=route;