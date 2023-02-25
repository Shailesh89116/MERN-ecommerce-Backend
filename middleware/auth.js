
const User=require('../Database Model/UserModel');
const ErrorResponse=require('../utils/errorResponse')
const jwt = require("jsonwebtoken");

exports.verifyToken = async(req, res, next) => {
    let token;
    if(req.headers.authorization ){
        token=req.headers.authorization.split(' ')[1]
    }

    if(!token){
        return next(new ErrorResponse("Not have valid token",401))
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_KEY);

        const user=await User.findById(decoded.id);
        if(!user){
            return next(new ErrorResponse("No user found with this id",404))
        }

        req.user=user;
        next();
    } catch (error) {
        return next(new ErrorResponse(error,404))
    }
};

exports.verifyTokenAndAuthorization = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

exports.verifyTokenAndAdmin = async(req, res, next) => {
  let token;
  console.log(req.headers.authorization);
  if(req.headers.authorization ){
      token=req.headers.authorization.split(' ')[1]
  }

  if(!token){
      return next(new ErrorResponse("Not have valid token",401))
  }
  try {
      const decoded=jwt.verify(token,process.env.JWT_KEY);

      const user=await User.findById(decoded.id);
      if(!user){
          return next(new ErrorResponse("No user found with this id",404))
      }

      if(user.isAdmin){
        next();
      }else{
        return next(new ErrorResponse("Not Allowed",404))
      }
      
      
  } catch (error) {
      return next(new ErrorResponse(error,404))
  }
};
