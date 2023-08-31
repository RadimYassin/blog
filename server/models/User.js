const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")

const Schema=mongoose.Schema;


const UserSchema= new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    // image:{type:String,required:true},
    liked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] 

})

UserSchema.statics.register=async function (firstName,lastName,email,password) {
    
    if (!firstName || ! lastName || !email || !password ) {
        throw Error(" All inputs must be filled")
    }
    // check user if exist in db
    const exist=await this.findOne({email})

    if (exist) {
        throw Error("email already exist in database")
    }

    const salt= await bcryptjs.genSalt(10);
    const hash=await bcryptjs.hash(password,salt)

    const Newuser=await this.create({firstName,lastName,email,password:hash})

    return Newuser
}

UserSchema.statics.login = async function(email,password){

    if (!email || !password) {
        throw Error(" All inputs must be filled")
    }

    const user=await this.findOne({email})
    if (!user) {
        throw Error("USER not exist")
    }


    // check password
    const coreccte=await  bcryptjs.compare(password,user.password)
    if (!coreccte) {
        throw Error("password not correct")
    }
  return user


}

module.exports=mongoose.model("User",UserSchema)