const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose.connect("mongodb+srv://akashsunilsingh5555:admin@apibackend.71vgjff.mongodb.net/Node-API?retryWrites=true&w=majority&appName=APIBackend").then(() => {
    console.log("Connected to MongoDB!!");
    app.listen(3000, () => {
        console.log("Server is started!!")
    });
})
.catch(() => {
    console.log("Connection failed!!");
});