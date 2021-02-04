const mongoose = require("mongoose");

const TimesheetSchema = mongoose.Schema({
  projectname: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,    
  },  
  starttime: {
    type: String,
    required: true,
  },
  stoptime: {
    type: String,
    required: true,  
  },
  duration: {
    type: String,
    required: true,  
  }
});

const Timesheet = mongoose.model('timesheet',TimesheetSchema);

module.exports = { Timesheet }
