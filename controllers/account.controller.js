const userDB = require("../models/user");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    const { email, name, password } = req.body;
    const exist = await userDB.findOne({ email });
    if (exist) {
        return res.send({ success: "false", message: "email already exists" });
    }
    const user = await userDB.create({ email, name, password });
    return res.send({ success: true, message: "account created" });
}
const signIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await userDB.findOne({ email, password });
    if (!user) {
        // console.log({email, password});
        return res.send({ success: "false", message: "incorrect credentials" });
    }
    const token = jwt.sign({ id: user._id, name: user.name, email: user.email, cur: user.cur }, process.env.TOKEN_KEY, { expiresIn: "1d" });
    res.send({ success: true, data: token });
}
module.exports = { signUp, signIn };