require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const accountRoute = require("./routes/accountRoute");
const detailRoute = require("./routes/detailRoute");
const adminRoute = require("./routes/adminRoute");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// DB
dbConnect().catch(err => console.log(err));
async function dbConnect() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
}


app.use("/api/account", accountRoute);
app.use("/api/detail", detailRoute);
app.use("/api/admin", adminRoute);

app.listen(PORT, () => {
    console.log(`port ${PORT}`);
});