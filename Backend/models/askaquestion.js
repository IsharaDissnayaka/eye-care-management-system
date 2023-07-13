const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const askaquestionSchema = new Schema({
  
  questiontitel : {
         type : String,
         required:true
    },

  category : {
        type : String,
        required:true
   },

   tags : {
    type : String,
    required:true
  },
    questiondescription : {
      type : String,
      required:true
  },
})

const askaquestions = mongoose.model("askaquestion",askaquestionSchema);
module.exports = askaquestions;