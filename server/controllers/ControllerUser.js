const User=require("../models/User")
const jwt=require("jsonwebtoken")


const createToken=(id)=>{
    return jwt.sign({id},"radim",{expiresIn:"7d"})
}

const UserRegister=async(req,res)=>{

    try {
        const {firstName,lastName,email,password}=req.body

        const {image}=req.file.filename
        const user = await User.register(firstName,lastName,email,password,image)
      res.status(200).json({info:"ok"});
    } catch (error) {
        res.json({message:error.message});
    }
   
}



const Userlogin=async(req,res)=>{

    try {
        const {email,password}=req.body
        const user = await User.login(email,password)
       const token= createToken(user._id)
      res.status(200).json({token,userId:user._id});
   
    } catch (error) {
        res.json({message:error.message});
    }
   
}
const allUser=async(req,res)=>{

    try {
     
        const users = await User.find({})
    
      res.status(200).json(users);
    } catch (error) {
        res.json({message:error.message});
    }
   
}

module.exports={UserRegister,Userlogin,allUser}