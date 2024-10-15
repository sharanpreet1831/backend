import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async() =>{
    try {
        const connectionInstance = await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb Connect !! DB  host :${connectionInstance.connect.host}`)
    } catch (error){
        console.log("mongo db connection Failed ", error)
        process.exit(1)
    }
}

export default connectDB