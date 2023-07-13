const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogsPostSchema = new Schema({
  title : {
         type : String,
         required:true
    },
    
    titleDescription : {
        type : String,
        required:true
   },

   description : {
    type : String,
    required:true
   },
  tags : {
    type : String,
    required:true
   },
  reference : {
    type : String,
    required:true
  },
  minidescription : {
    type : String,
    required:true
   },

  // Blogimg : {
  //   type : String,
  //   required:true
  // },
},
);

const Blogposts = mongoose.model("BlogsPosts",BlogsPostSchema);
module.exports = Blogposts;