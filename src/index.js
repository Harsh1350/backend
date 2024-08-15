//require('dotenv').congif({path:'./env'}) or

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({path: './env'})

connectDB() 
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`process is running at the port : ${process.env.PORT}`)
        // app.on("error",(error)=>{
        //     console.log("ERR",error);
        //     throw error
        // })
    })
})
.catch((err)=>{
    console.log("mongo db connect failed",err)
})


// import express from"express"

// const app= express()
// ;(async ()=>{
//     try{
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error",(error)=>{
//                 console.log("ERRR",error);
//                 throw error
//             })

//             app.listen(process.env.PORT,()=>{
//                 console.log(`app is running at port ${prcess.env.port}`)
//             })
//     }
//     catch(error){
//         console.error("ERROR",error)
//         throw err
//     }
// })()
// function connectDB(){}

// connectDB()