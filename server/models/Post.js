const mongoose= require("mongoose");
const Schema=mongoose.Schema;



const blogSchema = new Schema({
    title: {type:String,required:true}, // String is shorthand for {type: String}
    bio: {type:String,required:true},
    author:{type:String,required:true},
    image:{type:String,default:"img.pmg"},
    idU:{
      type:mongoose.Types.ObjectId,
      ref:"User",
      required:true
    
    },
    datePb:{ type: Date, default: Date.now },
  },{timestamps:true});

  module.exports=mongoose.model("Post",blogSchema)