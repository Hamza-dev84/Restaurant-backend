

const User = require("../models/User");
const generateToken = require("../utilities/generateToken");

const registerUser = async (data) => {

    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const user = await User.create(data);

    return {
        id: user._id,
        name: user.name,
        email: user.email
    };
};

const loginUser = async (email, password) => {

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid Credentials");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid Credentials");

    return {
        token: generateToken(user._id),
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    };
};

module.exports = { registerUser, loginUser };

