const router = require("express").Router();
let askaquestions =require("../models/askaquestion");

router.route("/add").post((req,res)=>{
   const questiontitel=req.body.questiontitel;
   const category=req.body.category;
   const tags=req.body.tags;
   const questiondescription=req.body.questiondescription;
  
   const newaskaquestions =new askaquestions({
       questiontitel,
       category,
       tags,
       questiondescription
   })

   newaskaquestions.save().then(()=>{
       res.json("Student Added")
   }).catch((err)=>{
       console.log(err)
   })
})

router.route("/").get((req,res)=>{
   askaquestions.find().then((blog)=>{
       res.json(blog)
   }).catch((err)=>{
       console.log("helloo fucking hear"+err)
   })
})


router.route("/update/:askaquestionsID").put(async(req,res)=>{
   let askaquestionsID=req.params.askaquestionsID;

   const questiontitel=req.body.questiontitel;
   const category=req.body.category;
   const tags=req.body.tags;
   const questiondescription=req.body.questiondescription;

   const updateaskaquestions={
       questiontitel,
       category,
       tags,
       questiondescription
   }

   const update =await askaquestions.findByIdAndUpdate(askaquestionsID,updateaskaquestions)
   .then(()=>{
       res.status(200).send({status:"User Update "})
   }).catch((err)=>{
       console.log(err);
       res.status(500).send({status:"Eroro with updating data"});
   })
})


router.route("/delete/:askaquestionsID").delete(async(req,res)=>{
   let askaquestionsID=req.params.askaquestionsID;


   await askaquestions.findByIdAndDelete(askaquestionsID)
   
   .then(()=>{
       res.status(200).send({status:"User delete "})
   }).catch((err)=>{
       console.log(err);
       res.status(500).send({status:"Eroro with deleting data"});
   })
})

router.route("/get/:askaquestionsID").get(async(req,res)=>{
   let askaquestionsID=req.params.askaquestionsID;

   await askaquestions.findById(askaquestionsID)
   .then(()=>{
       res.status(200).send({status:"User fetced "})
   }).catch((err)=>{
       console.log(err);
       res.status(500).send({status:"Eroro with get user"});
   })
})

module.exports=router;