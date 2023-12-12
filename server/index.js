import express from "express";
import Connection from "./database/Connection.js";
import routes from "./routes/routes.js";
import OrderRoutes from "./routes/OrderRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/", OrderRoutes);
Connection();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
  console.log(`http:localhost:${port}`);
});
