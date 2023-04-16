const adminDB = require("../models/admin");
const userDB = require("../models/user");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
    const { userid, password } = req.body;
    const admin = await adminDB.findOne({ userid, password });
    if (!admin) {
        // console.log({email, password});
        return res.send({ success: "false", message: "incorrect credentials" });
    }
    const token = jwt.sign({ id: admin._id, userid: admin.userid }, process.env.TOKEN_KEY, { expiresIn: "1d" });
    res.send({ success: true, data: token });
}
const getData = async (req, res) => {
    const data = await userDB.find({cur: 6}, "-password");
    res.send(data);
}
module.exports = { signIn, getData };