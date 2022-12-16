import {Schema,model} from 'mongoose';
const userScheme = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:6,
        max:64
    },
    address:{
        type:String,
        trim:true
    },
    role:{
        type:Number,
        default:0
    },
},{timestamps:true});

export default model("User",userScheme);