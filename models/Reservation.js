
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"]
    },
    date: {
        type: String,
        required: [true, "Date is required"]

    },
    time: {
        type: String,
        required: [true, "Time is required"]
    },
    persons: {
        type: String,
        required: [true, "Persons information is required"]
    },

})

module.exports = mongoose.model("Reservation", reservationSchema);