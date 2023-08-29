const express = require("express")
const router = express.Router()
const Food = require("../../models/FoodItems")



router.post("/",async(req,res)=>{
    const {CategoryName , name , img, options,description} = req.body
    console.log("request " , req.body)
    try {
        let food = await Food.findOne({name})
        console.log("food " , food)
        if(food){
            res.status(400).json({errors:[{msg:"name  is already exists"}]})
        }
        food = new Food({
            CategoryName ,
             name , 
             img, 
             options,
             description

        })
        
        await food.save()
        return res.status(201).send(food)

      
    } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
        
    }
})

module.exports = router