const express = require("express");
const app = express();

require("./conn/conn");
const cors = require("cors")
// const contact = require("../routes/contact");
const contact = require("./routes/contact");
app.use(express.json());
app.use(cors());

app.use("/api/v1",contact);





 












app.get("/",(req,res)=>{
    res.send("server is running");
});
app.listen("1000",()=>{
    console.log("server is  running");
});






