import express from "express";
const route = express.Router();
import { sendData, getOrder } from "../controller/OrderController.js";

route.post("/order", sendData);
route.post("/getorder", getOrder);

export default route;
