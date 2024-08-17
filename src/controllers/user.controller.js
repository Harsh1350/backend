//import { json } from "express"
import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const registerUser=asyncHandler(async(req,res)=>
    {
    
     
          const {email}=   req.body
         console.log("emial:", email); 
              
     return res.status(201).json(
          new ApiResponse(200, email, "User registered Successfully"))
    })

    export{registerUser}
