
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },

    price: {
        type: String,
        required: [true, "price is required"]
    },

    ingredients: {
        type: [String],
        required: [true, "Ingredients are required"]
    },

    category: {
        type: String,
        required: [true, "Category is required"]
    }
}, );

module.exports = mongoose.model("Menu", menuSchema);