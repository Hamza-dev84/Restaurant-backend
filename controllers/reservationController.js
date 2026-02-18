
const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {
    try {
        console.log(req);
        const { name, email, phone, date, time, persons } = req.body;
        // if (!name || !email || !phone || !date || !time || !persons) {
        //     return res.status(400).json({ message: "All fields are required" });
        // }
        
        const reservation = await Reservation.create({
            name, email, phone, date, time, persons
        })

        res.status(201).json({ message: "Reservation Successful" }, reservation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}


exports.getReservations = async (req, res) => {
    try {
        console.log(req);
        const reservations = await Reservation
            .find()
            .sort({ createdAt: -1 });
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}