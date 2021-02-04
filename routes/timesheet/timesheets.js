var express = require("express");
var router = express.Router();
var { Timesheet } = require("../../model/timesheet");

/* GET users listing. */
router.get("/",async (req,res) => {
  try {
       let timesheets = await Timesheet.find({});
       res.json(timesheets)
  } catch (error) {
       res.json({
            message : "Error",
            error
       })
  }
});
router.post("/create",async (req,res,next) => {
    Timesheet.create(req.body)
  .then((timesheet)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({
        message : "Timesheet Created",
        timesheet:timesheet
   })
  },(err)=>next(err))
  .catch((err)=>next(err))
})
router.get("/:id",async (req,res,next)=>{
  Timesheet.findById(req.params.id)
  .then((timesheet)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(timesheet)
  },(err)=>next(err))
  .catch((err)=>next(err))
})
router.put("/:id",async (req,res,next)=>{   
  Timesheet.findByIdAndUpdate(req.params.id,{
      $set:req.body
  },{
      new:true
  })
  .then((timesheet)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({
        message : "Timesheet Updated",
        timesheet:timesheet
   })
  },(err)=>next(err))
  .catch((err)=>next(err))
})
router.delete("/:id",async (req,res,next)=>{
  Tmesheet.findByIdAndRemove(req.params.id)
  .then((timesheet)=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({
        message : "Timesheet Deleted"        
   })
  },(err)=>next(err))
  .catch((err)=>next(err))
});
module.exports = router;
