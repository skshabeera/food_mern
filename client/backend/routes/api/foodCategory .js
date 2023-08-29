const express = require("express")
const router = express.Router()
const foodData = require("../../models/foodData")





router.post("/",async(req,res)=>{
    const {CategoryName} = req.body
    try {
        let foodCategory = await foodData.findOne({CategoryName})
        if(foodCategory){
            res.status(400).json({errors:[{msg:"category is already exists"}]})
        }
        foodCategory = new foodData({
            CategoryName
        })
        await foodCategory.save()
        return res.status(200).send(foodCategory)
        
    } catch (err) {
        console.error(err.message);
    res.status(500).send("server error");
        
    }
})
module.exports = router