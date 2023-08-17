const { default: mongoose } = require("mongoose")
const Post = require("../models/Post")
const Comment = require("../models/Comment")

const getAllPosts = async (req, res) => {
  try {
    const post = await Post.find({}, { updatedAt: false, createdAt: false, __v: false }).sort()
    res.json(post)
  } catch (error) {
    res.status(404).json({ message: "error" })
  }

}
// create post
const CreatePost = async (req, res) => {

  const { title, bio } = req.body

  if (!title || !bio) return res.status(401).json({ message: "all inputs must be feilled" })
  const newPost = await Post.create({ title, author: req.user.firstName, bio, idU: req.user._id, image: req.file.filename })
  newPost.save()
  res.status(200).json(newPost)
}
// select post with all comments
const SelectPost = async (req, res) => {

  const { id } = req.params

  const post = await Post.find({ _id: id }, { updatedAt: 0, __v: 0 });

  post.map(async (item) => {
    const comment = await Comment.find({ post: item._id })

    res.json({ post: { info: item, comment } })


  })


}




// deleteOne 
const deleteOne = async (req, res) => {

  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "post not found" })

  }
  const post = await Post.findByIdAndDelete({ _id: id })




  res.status(200).json({ message: " is deleted" })
}



// like a post 

const likePost = async (req, res) => {

  const { id } = req.params
  const {_id}=req.user


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "post not found" })

  }

  const post = await Post.findOne({ _id: id })


const liked= await post.like.find(item =>item.id ===_id)

res.status(200).json({ message: liked })
    // check if user liked this post or not
    post.like.push({id:req.user._id})
    post.save()


}


module.exports = { getAllPosts, CreatePost, SelectPost, likePost }