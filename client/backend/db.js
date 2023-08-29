const mongoose = require("mongoose")

const db = "mongodb+srv://shabeera:Shabeera@cluster0.5mza5sj.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async() =>{
    try{
        await mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true})
            console.log(" mongodb connected")
            const fetched_data = await mongoose.connection.db.collection("foods");
            const data = await fetched_data.find({}).toArray();
    
            const foodCategory = await mongoose.connection.db.collection("fooddatas");
            const catdata = await foodCategory.find({}).toArray();
    
            global.foods = data;
            global.fooddatas = catdata;
            
           
           
          
        }


    catch(err){
        console.error(err.message)
    }
}
module.exports = connectDB
