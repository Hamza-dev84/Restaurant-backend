
const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // if (!name || !email || !subject || !message) {
        //     return res.status(400).json({status:'fail', message: "All fields are required" });
        // }

        const newMessage = await Contact.create({ name, email, subject, message });

        res.status(201).json({ status: "success", message: "Message sent successfully", data: newMessage });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

exports.getMessage = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
