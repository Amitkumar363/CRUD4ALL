import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import {router} from "./router/userRouter.js"
dotenv.config();
const app=express();
app.use(cors());



app.use(express.json());


app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err);
    console.log(`Server is running on port ${process.env.PORT}`);
});
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("connected successfully");
})
.catch((error)=>{
    console.log("connection failed")
});

app.use(router);
