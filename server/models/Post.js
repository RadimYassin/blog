const mongoose= require("mongoose");
const Schema=mongoose.Schema;



const blogSchema = new Schema({
    title: {type:String,required:true}, // String is shorthand for {type: String}
    bio: {type:String,required:true},
    author:{type:String,required:true},
    image:{type:String,default:"https://images.pexels.com/photos/17683686/pexels-photo-17683686/free-photo-of-woman-girl-portrait-35mm.jpeg"},
    idU:{
      type:mongoose.Types.ObjectId,
      ref:"User",
      required:true
    
    },
    datePb:{ type: Date, default: Date.now },
  },{timestamps:true});

  module.exports=mongoose.model("Post",blogSchema)