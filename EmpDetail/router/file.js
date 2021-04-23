const express= require('express');
const router= express.Router();
const employee= require('../models/employee');

//Submit an Api
router.post('/',async(req,res)=>{
    const database=new employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary:req.body.salary
    });
    try{
        const savedDb= await database.save();
        res.json(savedDb);
    }catch(err){
        res.json({message:err});
    }
});

//Get back /see all the post
router.get('/',async(req,res)=>{
    try{
    const allDb= await employee.find();
    res.json(allDb);
    }catch(err){
        res.json({message:err})
    }
})

//Find a specific post by _id
router.get('/:nameId',async(req,res)=>{
    try{
    const data= await employee.findById(req.params.nameId);
    res.json(data);
    }catch(err){
        res.json({message:err})
    }
})

//Update a post by _id
router.patch('/:nameId',async(req,res)=>{
    try{
        const updateDb= await employee.findByIdAndUpdate({_id:req.params.nameId},{$set:{salary:req.body.salary,
            name:req.body.name,position:req.body.position,office:req.body.office}
        })
        res.json(updateDb)
    }catch(err){
        res.json({message:err})
    }
})

//Delete a post by _id
router.delete('/:nameId',async(req,res)=>{
    try{
        const removedFile= await employee.remove({_id:req.params.nameId})
        res.json(removedFile)
    }catch(err){
        res.json({message:err})
    }
})

module.exports=router;