const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "MySecretToken"

router.post(
  "/createUser",
  [
    body("email", "inavalid email").isEmail(),
    body("name", "invalid name").not().isEmpty(),
    body("password", "invalid password").isLength({ min: 5 }),
    body("location", "invalid location").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10)
    let secpassword = await bcrypt.hash(req.body.password , salt)
    try {
      await User.create({
        name: req.body.name,
        password: secpassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  }
);
router.post("/loginUser", async (req, res) => {
    let email = req.body.email
  try {
    let userData = await User.findOne({email})
    if(!userData){
        return res.status(400).json({ errors: "Try logging with correct credentials" });
       
    }
    const passwordCompare = await bcrypt.compare(req.body.password,userData.password)
    
    if(!passwordCompare){
        return res.status(400).json({ errors: "Try logging with correct credentials" })
    }
    const data = {
      user:{
        id:userData.id
      }
    }
    const authToken = jwt.sign(data,jwtSecret)
    
    return res.json({ success: true  , authToken:authToken});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});
module.exports = router;
