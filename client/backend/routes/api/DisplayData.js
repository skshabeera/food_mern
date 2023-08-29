const express = require("express")
const router = express.Router()
const connectDB = require("../../db")


router.post("/",async(req,res)=>{
    try {
         await connectDB(); 
      
        res.send([global.foods,global.fooddatas])
    } catch (error) {
        console.error(error.message)
        res.send("Server error ")

        
    }
})
module.exports = router