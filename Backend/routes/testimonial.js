const router = require("express").Router();
let testimonials =require("../models/testimonial");

router.route("/add").post((req,res)=>{
   const heading=req.body.heading;
   const name=req.body.name;
   const title=req.body.title;
   const company=req.body.company;
   const keyphrase=req.body.keyphrase;
  
   const newtestimonials =new testimonials({
       name,
       heading,
       title,
       company,
       keyphrase
   })

   newtestimonials.save().then(()=>{
       res.json("newtestimonial Added")
   }).catch((err)=>{
       console.log(err)
   })
})

router.route("/").get((req,res)=>{
    testimonials.find().then((testimonial)=>{
       res.json(testimonial)
   }).catch((err)=>{
       console.log("testimonial error hear"+err)
   })
})


router.route("/update/:testimonialsid").put(async(req,res)=>{
   let testimonialsid=req.params.testimonialsid;

   const heading=req.body.heading;
   const name=req.body.name;
   const title=req.body.title;
   const company=req.body.company;
   const keyphrase=req.body.keyphrase;

   const updatetestimonials={
        name,
        heading,
        title,
        company,
        keyphrase
   }

   const update =await testimonials.findByIdAndUpdate(testimonialsid,updatetestimonials)
   .then(()=>{
       res.status(200).send({status:"testimonial Update "})
   }).catch((err)=>{
       console.log(err);
       res.status(500).send({status:"Eroro with updating data"});
   })
})


router.route("/delete/:testimonialsid").delete(async(req,res)=>{
   let testimonialsid=req.params.testimonialsid;


   await testimonials.findByIdAndDelete(testimonialsid)
   
   .then(()=>{
       res.status(200).send({status:"User delete "})
   }).catch((err)=>{
       console.log(err);
       res.status(500).send({status:"Eroro with deleting data"});
   })
})

router.route("/get/:testimonialsid").get(async(req,res)=>{
   let testimonialsid=req.params.testimonialsid;

   await testimonials.findById(testimonialsid)
   .then(()=>{
       res.status(200).send({status:"User fetced "})
   }).catch((err)=>{
       console.log(err);
       res.status(500).send({status:"Eroro with get user"});
   })
})

module.exports=router;