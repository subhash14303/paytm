const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 3000;
const mainrouter = require("./routes/index.js");


//connections
mongoose.connect("mongodb://127.0.0.1:27017/paytm").then(()=>{console.log("mongodb connected")});

//routes
app.use(express.json());
app.use(cors());


app.use("/api/v1",mainrouter);


app.listen(PORT,()=>{console.log(`listening on PORT ${PORT}`)});
