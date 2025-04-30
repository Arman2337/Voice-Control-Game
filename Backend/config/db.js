import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async()=>{

    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB is Connected :)')
    })
    await mongoose.connect(process.env.MONGODB_URI, {
        //if want to use some flags use it.
    })
}