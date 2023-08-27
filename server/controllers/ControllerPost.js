const { default: mongoose } = require("mongoose")
const Post = require("../models/Post")
const Comment = require("../models/Comment")
const User = require("../models/User")

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
  try {
    const post = await Post.findById({ _id:req.params.id} );
    const user = await User.findById({ _id:req.user._id} );

    if (!post) {
      return res.status(404).send('Post not found');
    }
    // Check if the user has already liked the post
    if (post.likes.includes(req.user._id)) {
      return res.status(201).json({ message:'You have already liked this post'} );
    }

    post.likes.push(req.user._id);// Push user ID to likes array
    user.liked.push(post._id)
    await post.save();
    await user.save()
    

    res.status(200).json({ userId:req.user._id});
  } catch (error) {
    console.error('Error liking post:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}



const unlikePost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });
    if (!post) {
      return res.status(404).send('Post not found');
    }
    // Check if the user has not liked the post
    if (!post.likes.includes(req.user._id)) {
      return res.json({ message: 'You have not liked this post' });
    }
    post.likes = post.likes.filter(id => id.toString() !== req.user._id.toString())
    await post.save();

    res.status(200).json({ message: 'unlike is ok' });
  } catch (error) {
    console.error('Error liking post:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}





const GetInfoPost=async(req,res)=>{
req.json({message:"salam"})
}

module.exports = { getAllPosts, CreatePost, SelectPost, likePost,unlikePost,GetInfoPost}