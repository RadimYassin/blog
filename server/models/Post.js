const mongoose= require("mongoose");
const Schema=mongoose.Schema;



const blogSchema = new Schema({
    title: {type:String,required:true}, // String is shorthand for {type: String}
    bio: {type:String,required:true},
    author:{type:String,required:true},
    image:{type:String},
    idU:{ type:mongoose.Types.ObjectId, ref:"User",required:true},
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] ,// Array of user IDs,
    datePb:{ type: Date, default: Date.now },
  },{timestamps:true});

  module.exports=mongoose.model("Post",blogSchema)