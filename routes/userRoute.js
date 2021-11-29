const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const User = require('../models/userModel')


router.post("/register",(req, res) => {

  User.find({email : req.body.email} , (err, docs) => {
   if ( docs.length > 0 ) {
        res.send( "Email Already Exists")
   } else {
      const newuser = new User(
         {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
         }
         
         )
       newuser.save(err => {
          if (!err) {
              res.send('User Registered Succ')
          } else {
             res.send('Wrong')
          }
       })

   }

   if(err) {
      res.send("Something went wrong")
   }
  }) 


 

});

router.post("/login",(req, res) => {

   User.find({email: req.body.email, password: req.body.password }, (err, docs) => {
      if(docs.length>0) {
         res.send("Login Success"  )
      } else  {
         return res.status(400).json({message:"Invalid credentials...." })
      }
      
   })
})
module.exports = router;