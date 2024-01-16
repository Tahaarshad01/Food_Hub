import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  order_data: {
    type: Array,
    required: true,
  },
});

const Order = mongoose.model("orderDetails", OrderSchema);
export default Order;
