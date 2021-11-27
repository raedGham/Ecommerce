const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dbConnect = require('./db');
const productsRoute = require('./routes/productsRoute');

app.use(bodyParser.json());
app.use('/api/products', productsRoute);


app.get("/", (req, res) => {
    res.send("This is from backend");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})