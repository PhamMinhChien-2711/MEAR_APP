



import { PostModel } from "../models/PostModel.js";


export const getPosts = async (req, res)=>{
    try {
        const posts = await PostModel.find();
        console.log(PostModel);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({error: err});
    }
};


export const createPost = async (req, res)=> {
    try {
        console.log('req.body')
        console.log(req.body);
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();  
        res.status(200).json({data: post});
    } catch (error) {
        res.status(500).json({error: err});
    }
}
export const updatePost = async (req, res)=> {
    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost,{new: true});
        await post.save();
        res.status(200).json({error: err});
    } catch (error) {
        res.status(500).json({error: err});
    }
}
export const deletePost = async (req, res)=> {
    try {
        const delPost = req.params;
        const post = await PostModel.findOneAndDelete({_id: delPost._id}, delPost,{new: true});
        await post.delete();
        res.status(200).json({error: err});
    } catch (error) {
        res.status(500).json({error: err});
    }
}