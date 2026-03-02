

const asyncWrapper = require("../utilities/asyncWrapper");
const sendSuccess = require("../utilities/responseHandler");
const { registerUser, loginUser } = require("../services/authService");

const register = asyncWrapper(async (req, res) => {

    const userData = await registerUser(req.body);

    sendSuccess({
        res,
        data: userData,
        message: "User Registered",
        statusCode: 201
    });
});

const login = asyncWrapper(async (req, res) => {
    const {email, password} = req.body;

    const loginData = await loginUser(email, password);

    sendSuccess({
        res,
        data: loginData,
        message: "Login Successful"
    });
});

module.exports = { register, login };