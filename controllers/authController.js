
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncWrapper = require("../utilities/asyncWrapper");
const sendSuccess = require("../utilities/responseHandler");
const createService = require("../services/dbService");
const User = require("../models/User");


const register = asyncWrapper(async (req, res) => {

    const { name, email, password } = req.body;


    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exist" });


    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    sendSuccess({
        res,
        data: { id: user._id, email: user.email, password: user.password },
        message: "User Registered",
        statusCode: 201
    });
});


const login = asyncWrapper(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    sendSuccess({
        res,
        data: {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        },
        message: "Login Successful"
    });
});

module.exports = { register, login };

