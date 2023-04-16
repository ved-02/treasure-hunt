const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {type: String},
    name: {type: String},
    password: {type: String},
    cur: {type: Number, default: 1},
    time: {type: Number, default: 0}
},
    { collection: "Users" }
);

const model = mongoose.model("User", userSchema);

module.exports = model;