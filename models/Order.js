
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    // 1. Customer Details
    customer: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },

    // 2. The Cart Items (Array)
    orderItems: [{

        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
        // currency: { type: String }

    }],

    // 3. Financials

    financials: {
        itemsTotal: { type: Number, required: true },
        deliveryFee: { type: Number, default: 0 },
        grandTotal: { type: Number, required: true },
        currency: { type: String, default: "$" }
    },


//     financials: {
//     itemsTotal: { type: String, required: true },
//     deliveryFee: { type: String, default: "0$" },
//     grandTotal: { type: String, required: true },
// },


    // 5. Payment Details
    payment: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
