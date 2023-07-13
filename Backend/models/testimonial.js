const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testimonialSchema = new Schema({
    heading : {
         type : String,
         required:true
    },
    name : {
        type : String,
        required:true
   },
    title : {
        type : String,
        required:true
    },
    company : {
        type : String,
        required:true
    },
    keyphrase : {
        type : String,
        required:true
    },
})

const testimonial = mongoose.model("testimonial",testimonialSchema);
module.exports = testimonial;