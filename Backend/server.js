const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();


require('dotenv').config()

const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"))


const URL = process.env.MONGODB_URL; 

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const blogsRouter = require("./routes/Blogs");
app.use("/blogs",blogsRouter);

const askaquestionsRouter = require("./routes/askaquestion");
app.use("/askaquestions",askaquestionsRouter);

const testimonialRouter = require("./routes/testimonial");
app.use("/testimonial",testimonialRouter);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("mongoDB connecion Success!");
})

app.listen(PORT,()=>{
    console.log(`sever is up and runing on port No ${PORT}`)
})
