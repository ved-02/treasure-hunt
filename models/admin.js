const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    userid: { type: String },
    password: { type: String }
},
    { collection: "Admins" }
);

const model = mongoose.model("Admin", adminSchema);

module.exports = model;