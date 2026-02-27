
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({


    customer: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },


    orderItems: [{

        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
    }],


    financials: {
        itemsTotal: { type: Number, required: true },
        deliveryFee: { type: Number, default: 0 },
        grandTotal: { type: Number, required: true },
        currency: { type: String, default: "$" }
    },

    payment: {
        type: String
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
