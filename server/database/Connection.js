import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  try {
    const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bigdaln.mongodb.net/food_hub?retryWrites=true&w=majority`;

    await mongoose.connect(URI, { useNewUrlParser: true });
    console.log("Database connected");

    const fetchData = mongoose.connection.db.collection("food");
    const data = await fetchData.find({}).toArray();
    global.food = data;
    console.log(data);

    const fetchCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await fetchCategory.find({}).toArray();
    global.foodCategory = catData;
    console.log(catData);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

export default Connection;
