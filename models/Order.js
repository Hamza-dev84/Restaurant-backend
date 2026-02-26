
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
    menuItemId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'MenuItem', // Links to your food database
      required: true 
    },
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    specialInstructions: { type: String, default: '' }
  }],

  // 3. Financials
  financials: {
    itemsTotal: { type: Number, required: true },
    deliveryFee: { type: Number, default: 0 },
    grandTotal: { type: Number, required: true },
  },


  // 5. Payment Details
//   payment: {
//    only COD;
//   }

}, { 
  timestamps: true 
});

module.exports = mongoose.model('Order', orderSchema);
