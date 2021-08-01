const express = require("express");
const router =  express.Router();
const Student = require("../models/students")

router.post("/students", async (req,res)=>{
    try {
        const user = new Student(req.body);
        const newuser = await user.save();
        res.status(201).send(newuser);
    } catch (error) {
        res.status(400).send(error);
    }  
});

router.get("/students", async (req, res) =>{
    try{
        const Users = await Student.find();
        console.log(Users);
        res.send(Users);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get("/students/:em", async (req, res) =>{
    try{
        const em = req.params.em;
        const user = await Student.find({email:em});
        console.log(user);
        res.send(user);
    }catch(err){
        res.status(500).send(err);
    }
})

router.patch("/students/:id", async (req,res) =>{
    try{
        const _id = req.params.id;
        const user = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(user);
        console.log("Successful");
    }catch(err){
        res.status(404).send(err);
    }
})

router.delete("/students/:id", async (req,res) =>{
    try{
        const _id = req.params.id;
        const uid = await Student.findByIdAndDelete(_id)
        res.send(uid);
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;
