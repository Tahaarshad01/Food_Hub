import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URI =
      "mongodb+srv://taarshad786:Arshad%4013@cluster0.bigdaln.mongodb.net/food_hub?retryWrites=true&w=majority";

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
