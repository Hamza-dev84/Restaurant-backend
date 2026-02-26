

const mongoose = require("mongoose");

const DescMenuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },

     description: {
        type: String,
        required: true
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
    },

    image1: {
        type: String, 
        required: false
    },

    image2: {
        type: String,
        required: false
    },

    
}, { timestamps: true });

module.exports = mongoose.model("DescMenu", DescMenuSchema);