import mongoose from "mongoose";

const Userschema = new mongoose.schema({
    username :{
        type :String ,
        required : true ,
        unique :true ,
        lowercase : true ,
    },
    Password :{
        type :String ,
        required : true ,
        
    },
    email :{
        type :String ,
        required : true ,
        unique :true ,
        lowercase : true ,
    }
},{timestamps :true })

export const User = mongoose.model("User", Userschema);