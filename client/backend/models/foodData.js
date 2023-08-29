const mongoose = require("mongoose")
const foodDataSchema = new mongoose.Schema({
    CategoryName:{
        type:String

    }
})
module.exports =  mongoose.model("foodData",foodDataSchema )