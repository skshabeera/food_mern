const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const connectDB = require("./db")
const foodData = require("./routes/api/foodData")
const foodCategory = require("./routes/api/foodCategory ")
const createUser = require("./routes/api/CreateUser")
const DisplayData = require("./routes/api/DisplayData")
const ordersData = require("./routes/api/orderData")
const cors = require('cors');

// Use the cors middleware
app.use(cors())



connectDB()

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/foodData", foodData)
app.use("/api/foodCategory", foodCategory)
app.use("/api" , createUser)
app.use("/api/DisplayData", DisplayData)
app.use("/api", ordersData)






const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})