const mongooose = require("mongoose");
const conn = async()=>{
    try{
        await mongooose.connect("mongodb+srv://pcm:2PmKniyQbqgyvB4E@omji.bscp9.mongodb.net/con")
        .then(
            ()=>{
            console.log("connected");
        },
        (error)=>{
            console.log(error)
        }
    
    
    )

    }catch(error){
        console.log(error)
    }
};
conn();
