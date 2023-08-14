const mongoose = require("mongoose")
const Comment = require("../models/Comment")

// add comment 

const AddComment = async (req, res) => {

    let dataOfuser = []

    dataOfuser.push(req.user)
    const { text, id } = req.body
    if (!text || !id) {
        res.json({ message: "error in comments" });
    }

    const comment = await Comment.create({ text: text, author: dataOfuser, post: id })
    comment.save()
    res.json({ "comment": comment });


}
/// delete comment

const delComment = async (req, res) => {

    const c = await Comment.deleteOne({ _id: req.params.id })

    res.json(c)
}

module.exports = {
    AddComment, delComment
}