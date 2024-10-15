import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"  // this is basicly use to take user cookie or create cokkie .Means curd operation on cookies 


const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true ,

}))

app.use(express.json({limit:"16kb"})) // when the data is come in the form of table 
app.use(express.urlencoded({extended: true , limit :"16kb"}))  // it is use when data comes from url link , 
app.use(express.static("pulic"))  //   to store file folder , its publis assets to store the file 
app.use(cookieParser())

export {app}