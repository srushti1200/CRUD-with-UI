const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
  name:  {
    type: String,
   
   }, // String is shorthand for {type: String}

  dept:  {
    type:String,
  },
  
});

module.exports = mongoose.model('Student', studentSchema);