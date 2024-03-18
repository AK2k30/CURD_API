const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/about', (req, res) => {
    res.send("hii")
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