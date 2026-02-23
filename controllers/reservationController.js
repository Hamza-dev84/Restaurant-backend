
const Reservation = require("../models/Reservation");
const {createService, getAllService} = require("../services/dbService");

const createReservation = createService(Reservation, "Reservation Successful");

const getReservations = getAllService(Reservation);

module.exports = {
    createReservation,
    getReservations
}