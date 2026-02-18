
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reservationRoutes = require("./routes/reservationRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();


app.use((req, res, next) => {
    next()
});
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/reservations", reservationRoutes);

app.use("/api/contact", contactRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server Running or PORT ${process.env.PORT}`);
})

