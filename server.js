// mongodb+srv://raed:16101974@cluster0.vhuyr.mongodb.net/mern-ecommerce
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dbConnect = require('./db');
const productsRoute = require('./routes/productsRoute');
const userRoute = require('./routes/userRoute');

app.use(bodyParser.json());
app.use('/api/products', productsRoute);
app.use('/api/users', userRoute);

app.get("/", (req, res) => {
    res.send("This is from backend");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})