// // const express = require("express").Router();
// // const contact = require("../models/contact");
// // router.post("/post",async(req,res)=>{
//     const express = require('express');
// const router = express.Router();
// const contact = require("../models/contact");

// // Define your POST route
// router.post('/post', async (req, res) => {
//     try{
//         const {name,number,address,state,city,message} = req.body;
//         const newContact = new contact({name,number,address,state,city,message} );
//         await newContact.save().then(()=>{
//             res.status(200).json({message:"Data Saved"});

//         },()=>{
//             res.status(400).json({message:"Data Not Saved"});

//         }
    
//     );


//     }catch(error){
//         res.status(400).json({message:"Technical Error Occured"});

//     }

// });
// module.exports = router;




const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); // Ensure correct import

// Define your POST route
router.post('/post', async (req, res) => {
    try {
        const { name, number, address, state, city, message } = req.body;
        const newContact = new Contact({ name, number, address, state, city, message });

        await newContact.save();
        res.status(200).json({ message: 'Data Saved' });
    } catch (error) {
        console.error('Error saving data:', error); // Log the error for debugging
        res.status(400).json({ message: 'Technical Error Occurred' });
    }
});

module.exports = router;
