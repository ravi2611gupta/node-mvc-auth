require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');

// connection
const connectToMongo = require("./config/database");
connectToMongo();

// middleware
app.use(express.json());
app.use(cors());

// constants
const port = process.env.PORT || 5000;


// Available Routes
app.get("/", (req, resp)=>{
    resp.json("test is working")
})

// getting routes
// user
const userRoutes = require("./routes/user/users");

// admin
const adminRoutes = require("./routes/admin/admin");
const eventType = require("./routes/admin/eventType");


app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/event-type", eventType);


app.listen(port, ()=>{
    console.log(`LMS backend listening at http://localhost:${port}`);
});