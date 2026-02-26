
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reservationRoutes = require("./routes/reservationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const menuRoutes = require("./routes/menuRoutes");
const descMenuRoutes = require("./routes/descMenuRoutes")
const errorHandler = require("./middleware/errorHandlerMiddleware");
const connectToDB = require("./config/db");

const app = express();

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/reservations", reservationRoutes); 
app.use("/api/contact", contactRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/descmenu", descMenuRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, "0.0.0.0",() => {
    console.log(`Server Running or PORT ${process.env.PORT}`);
})

