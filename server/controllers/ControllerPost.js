const { default: mongoose } = require("mongoose")
const Post=require("../models/Post")

//getALL POSTS for user
const getPostsForUser=async(req,res)=>{
 const {idU}=req.body
  const post = await Post.find({idU}).sort()
  if (post.length == 0) {
     return  res.json({message:"no posts yet"})
  }
  res.json({data:post})
}

//getALL POSTS
const getAllPosts=async(req,res)=>{

    const post = await Post.find({}).sort()
    res.json({data:post})
}
//get a single post
const getPost=async(req,res)=>{
   const {id}=req.params
 
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return  res.status(404).json({message:"post not found"})

    }
    const post= await Post.findOne({_id:id})
    res.status(200).json(post)


}
// create post
const CreatePost=async(req,res)=>{

  const {title,bio,author,idU}=req.body
  if(!title || !bio || !author) return res.status(401).json({message:"all inputs must be feilled"})
  const newPost=await Post.create({title,author,bio,idU})

   newPost.save()
   res.status(200).json(newPost)
}

//search
const SearchByType=async(req,res)=>{


  const {type}=req.body
  const post=await  Post.find({type:type});
  if (post.length == 0) {
    res.status(401).json({message:"post not found"})

  }

 

 res.status(200).json({data:post})
}

// deleteOne 
const deleteOne=async(req,res)=>{


  const {id}=req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return  res.status(404).json({message:"post not found"})

 }
 const post= await Post.findByIdAndDelete({_id:id})
 

 

 res.status(200).json({message:" is deleted"})
}

module.exports = {getAllPosts,CreatePost,SearchByType,getPost,deleteOne,getPostsForUser}