import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  securePassword: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  join: {
    type: Date,
    default: Date.now,
  },
});

const Food = mongoose.model("user", FoodSchema);

export default Food;
