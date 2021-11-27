const mongoose = require('mongoose');

var mongoDBURL = "mongodb+srv://raed:16101974@cluster0.vhuyr.mongodb.net/mern-ecommerce";

mongoose.connect(mongoDBURL, { useUnifiedTopology: true, useNewUrlParser: true })

const dbconnect = mongoose.connection;

dbconnect.on('error', () => {
    console.log("db connection error")
});

dbconnect.on('connected', () => {
    console.log("db connected sucessfully")
})

module.exports = mongoose;
