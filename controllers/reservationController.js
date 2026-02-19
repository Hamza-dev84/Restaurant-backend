
const Reservation = require("../models/Reservation");
const sendSuccess = require("../utilities/responseHandler");

const createReservation = async (req, res, next) => {
    try {
        console.log(req);
        const { name, email, phone, date, time, persons } = req.body;

        const reservation = await Reservation.create({
            name, email, phone, date, time, persons
        })

        sendSuccess({ res, data: reservation, message: "Reservation Successful" });
    } catch (error) {
    
        next(error);
    }

}

const getReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation
            .find()
            .sort({ createdAt: -1 });

        sendSuccess({ res, data: reservations });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createReservation, getReservations
}