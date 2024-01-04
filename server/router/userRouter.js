import express from "express";

import { User } from "../models/userModels.js";

export const router=express.Router();


router.post("/", async(req,res)=>{
    const  {name,email,age}= req.body;
    try{
        const  userAdded= await User.create({
            name: name,
            email: email,
            age: age,

        })
       return res.status(201).json(userAdded);
    }
    catch(error){
       return  res.status(400).json({error: error.message})
       }
    
})

router.get('/',async(req,res)=>{
    try{
        const show = await User.find();
       return res.status(200).json(show);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({error: error.message})
    }
   
});
router.get('/:id',async(req,res)=>{
    const {id}=req.params;
    try{
        const single = await User.findById({_id: id});
       return res.status(200).json(single);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({error: error.message})
    }
   
});
router.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    try{
        const deleteId = await User.findByIdAndDelete({_id: id});
       return res.status(200).json(deleteId);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({error: error.message})
    }
   
});
router.patch('/:id',async(req,res)=>{
    const {id}=req.params;
    const {name ,email ,age}=req.body;
    try{
        const update = await User.findByIdAndUpdate(id,req.body,{new : true});
       return res.status(200).json(update);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({error: error.message})
    }
   
});

