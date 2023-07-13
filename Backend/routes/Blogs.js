 const router = require("express").Router();
 let blogs =require("../models/BlogsPost");
 const multer  = require('multer')


//  const fileStorageEngine =  multer.diskStorage({
//    destination:(req,file,cb) =>{
//     cb(null,'./uplods')
//    },
//    filename:(req,file,cb)=>{
//     cb(null,Date.now()+file.originalname);
//    },
//  });


//  const upload = multer({storage:fileStorageEngine});

// ,upload.single('Blogimg')
 router.route("/add").post((req,res)=>{
    const titleDescription=req.body.titleDescription;
    const title=req.body.title;
    const description=req.body.description;
    const minidescription=req.body.minidescription;
    const tags=req.body.tags;
    const reference=req.body.reference;
    //const Blogimg=req.file.path;
   
    const newBlog =new blogs({
        titleDescription,
        title,
        description,
        minidescription,
        tags,
        reference,
        //Blogimg
    })

    newBlog.save().then(()=>{
        res.json("Blogs Added")
    }).catch((err)=>{
        console.log(err)
    })
 })

 router.route("/").get((req,res)=>{
    blogs.find().then((blog)=>{
        res.json(blog)
    }).catch((err)=>{
        console.log(" bloge adding some error"+err)
    })
 })


 router.route("/update/:BlogID").put(async(req,res)=>{
    let BlogID=req.params.BlogID;

    const titleDescription=req.body.titleDescription;
    const title=req.body.title;
    const description=req.body.description;
    const minidescription=req.body.minidescription;
    const tags=req.body.tags;
    const reference=req.body.reference;
     //const Blogimg=req.body.Blogimg;
    

    const updateBlogs={
        titleDescription,
        title,
        description,
        minidescription,
        tags,
        reference,
      //  Blogimg
    }

    const update =await blogs.findByIdAndUpdate(BlogID,updateBlogs)
    .then((data)=>{
        res.status(200).send({status:"Blog Update ",data})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data"});
    })
 })


 router.route("/delete/:Blogid").delete(async(req,res)=>{
    let BlogID=req.params.Blogid;


    await blogs.findByIdAndDelete(BlogID)
    
    .then(()=>{
        res.status(200).send({status:"Blog delete "})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Eroro with deleting data"});
    })
 })

 router.route("/get/:Blogid").get(async(req,res)=>{
    let BlogID=req.params.Blogid;

    await blogs.findById(BlogID)
    .then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Eroro with get user"});
    })
 })

 module.exports=router;