import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import server from './routes/server.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
dotenv.config();

// app
app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

// db
// process.env.MONGO_URI ||
mongoose.connect(process.env.MONGO_URI,(err,done)=>{
    if(err){
        console.log(err);
    }
    console.log('DB connected');
})

// middleware routes
app.use('/',server)


app.use("/api", apiRoutes);

const path = require('path');
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname, "../client","build","index.html")))
}else{
  app.get('/',(req,res)=>{
    res.json({message:"API running..."})
  })
}

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server has been started on port ",PORT);
})