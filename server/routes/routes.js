import express from "express";

import { addUser } from "../controller/controller.js";
import { getData } from "../controller/controller.js";
import { loginUser } from "../controller/controller.js";
import { logout } from "../controller/controller.js";
const route = express.Router();

route.post("/register", addUser);
route.post("/login", loginUser);
route.post("/data", getData);
route.get("/logout", logout);

export default route;
