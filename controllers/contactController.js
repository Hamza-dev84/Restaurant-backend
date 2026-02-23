
const Contact = require("../models/Contact");
const { createService, getAllService } = require("../services/dbService");

const sendMessage = createService(Contact, "Message Sent Successfully");
const getMessage = getAllService(Contact);

module.exports = {
    sendMessage,
    getMessage
}