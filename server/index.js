import express from "express";
import Connection from "./database/Connection.js";
import routes from "./routes/routes.js";
import OrderRoutes from "./routes/OrderRoutes.js";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/", OrderRoutes);
Connection();
const PORT = process.env.PORT || 4000;

// Use __dirname to get the absolute path of the current directory
const _dirname = path.resolve();

// Construct the absolute path to the client build directory
const buildPath = path.join(_dirname, "../client/build");

// Serve static files from the client build directory
app.use(express.static(buildPath));

// Serve index.html for all other routes
app.get("*", function (req, res) {
  res.sendFile(path.join(buildPath, "index.html"), function (err) {
    if (err) {
      console.log(err); // Log any errors
      res.status(500).send(err);
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  console.log(`http:localhost:${PORT}`);
});
