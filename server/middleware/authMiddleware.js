import jwt from "jsonwebtoken"
import User from "../models/User.js";
const protect=async(req,res,next)=>{
  try{
     let token;
    //check authorization headers
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token=req.headers.authorization.split(" ")[1]
  }  

  //check token 
    if(!token){
        return res.status(400).json({
            success:false,
            message:"Access Denied,NO token provide"
        })
    }
    //verify token 
    const decode=jwt.verify(token,process.env.MY_SECRETE_KEY);
    req.user=await User.findById(decode.id).select("-password");
    next();
  }catch(error){
    res.status(400).json({
        success:false,
        message:'Invalid or Expired token'
    })
  }


}

export default protect;