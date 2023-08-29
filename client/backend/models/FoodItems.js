const mongoose = require("mongoose")
const foodSchema = new mongoose.Schema({
    CategoryName: {
        type:String
    },
    name:{ 
        type:String
    },
    img:{
        type:String
    },
    options:[Object] ,
     description: {
        type:String
    }
})
module.exports = mongoose.model("food" , foodSchema)