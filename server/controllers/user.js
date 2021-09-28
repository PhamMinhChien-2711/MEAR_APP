import { UserModel } from "../models/UserModel.js";
import mongoose from "mongoose";


export const register = async ()=>{
    try {
       const user = await UserModel.insertMany()
        
       
    } catch (err) {
        console.log(err);
    }   
};


export const getUser = async (userId)=>{
    try {
        
        const [user] = await UserModel.find({_id: mongoose.Types.ObjectId(userId)})
        return user
        
    } catch (err) {
        console.log(err);
    }   
};
export const createUser = async (user)=>{
    try {
            const newUser = await UserModel.insertMany(user)
            return newUser
        
    } catch (err) {
        console.log(err);
    }   
};


export const updateUser = async (user)=>{
    try {
        
        const udatedUser = await UserModel.findOneAndUpdate({_id: mongoose.Types.ObjectId(user._id)}, user);
        console.log(udatedUser);
        return udatedUser;
        
    } catch (error) {
        console.log(error);
    } 

};
export const deleteUser = async (userId)=> {
    try {
       
        const user = await UserModel.deleteOne({_id: mongoose.Types.ObjectId(userId)});
        return user
        
    } catch (error) {
      console.log(error);
    }
}


 