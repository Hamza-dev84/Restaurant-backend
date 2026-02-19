
const Contact = require("../models/Contact");
const sendSuccess = require("../utilities/responseHandler");

const sendMessage = async (req, res, next) => {
    try {
        const { name, email, subject, message } = req.body;

        const newMessage = await Contact.create({ name, email, subject, message });

        
        sendSuccess({ res, data: newMessage, message: "Message Sent Successfully" });
    } catch (error) {
        next(error);
    }
}

const getMessage = async (req, res, next) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        
        sendSuccess({res, data: messages});
    } catch (error) {

        next(error);

    }
}

module.exports = {
    sendMessage, getMessage
}