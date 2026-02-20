
const Reservation = require("../models/Reservation");
const sendSuccess = require("../utilities/responseHandler");
const asyncWrapper = require("../utilities/asyncWrapper");

const createReservation = asyncWrapper(async (req, res) => {

    const { name, email, phone, date, time, persons } = req.body;

    const reservation = await Reservation.create({
        name, email, phone, date, time, persons
    })

    sendSuccess({ res, data: reservation, message: "Reservation Successful" });


})

const getReservations = asyncWrapper( async (req, res) => {
   
        const reservations = await Reservation
            .find()
            .sort({ createdAt: -1 });

        sendSuccess({ res, data: reservations });
    
})

module.exports = {
    createReservation, getReservations
}