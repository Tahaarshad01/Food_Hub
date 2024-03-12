import express from "express";
import Connection from "./database/Connection.js";
import routes from "./routes/routes.js";
import OrderRoutes from "./routes/OrderRoutes.js";
import cors from "cors";

const app = express();
app.use(
  cors(
  //   {
  //   origin: ["https://deploy."],
  //   methods: ["POST", "GET"],
  //   credentials: true,
  // }
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/", OrderRoutes);
Connection();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  console.log(`http:localhost:${PORT}`);
});
