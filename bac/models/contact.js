// const mongooose = require("mongoose");
// const contact = new mongooose.Schema({
//     name:{
//         type:String,
//         required:true,

//     },
//     Number:{
//         type:Number,
//         required:true,

//     },
//     address:{
//         type:String,
//         required:true,


//     },
//     state:{
//         type:String,
//         required:true,


//     },
//     city:{
//         type:String,
//         required:true,


//     },
//     message:{
//         type:String,
//         required:true,


//     },
    


// });
// module.exports = mongooose.model("contact",contact);


const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
    address: String,
    state: String,
    city: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
