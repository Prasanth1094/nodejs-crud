var express = require("express");
var router = express.Router();
var { User } = require("../../model/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

/* GET users listing. */
router.get("/",async (req,res) => {
  try {
       let products = await User.find({});
       res.json(products)
  } catch (error) {
       res.json({
            message : "Error",
            error
       })
  }
});
router.post("/create",async (req,res,next) => {
  User.create(req.body)
  .then((user)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({
        message : "User Created",
        user:user
   })
  },(err)=>next(err))
  .catch((err)=>next(err))
})
router.get("/:id",async (req,res,next)=>{
  User.findById(req.params.id)
  .then((user)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(user)
  },(err)=>next(err))
  .catch((err)=>next(err))
})
router.put("/:id",async (req,res,next)=>{   
  User.findByIdAndUpdate(req.params.id,{
      $set:req.body
  },{
      new:true
  })
  .then((user)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({
        message : "User Updated",
        user:user
   })
  },(err)=>next(err))
  .catch((err)=>next(err))
})
router.delete("/:id",async (req,res,next)=>{
  User.findByIdAndRemove(req.params.id)
  .then((user)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({
        message : "User Deleted"        
   })
  },(err)=>next(err))
  .catch((err)=>next(err))
});
module.exports = router;
