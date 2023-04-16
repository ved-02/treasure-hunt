const userDB = require("../models/user");
const jwt = require("jsonwebtoken");


const getDetail = async (req, res) => {
    const { email } = req.body;
    const user = await userDB.findOne({email});
    // console.log(user);
    res.send({cur: user.cur, time: user.time});
}
const updateDetail = async (req, res) => {
    const { email, cur, time } = req.body;
    const user = await userDB.findOne({email});
    // console.log(user);
    user.cur = cur;
    user.time = time;
    await user.save();
    res.send({success: "true"});
}
module.exports = { getDetail, updateDetail };