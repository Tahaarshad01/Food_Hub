import Food from "../model/Food.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = "tahaarshad13111999";

export const addUser = async (req, res) => {
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ];
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(8);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    const { name, email, location, join } = req.body;
    const registerData = await Food({
      name,
      email,
      securePassword,
      location,
      join,
    });
    const result = await registerData.save();
    res.send({ message: "registered succesfully", result });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const loginUser = async (req, res) => {
  let email = req.body.email;
  try {
    let usermail = await Food.findOne({ email });
    if (!usermail) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const passwordCompare = await bcrypt.compare(
      req.body.password,
      usermail.securePassword
    );

    if (!passwordCompare) {
      return res.status(400).json({ error: "Incorrect Password" });
    }

    const data = {
      user: {
        id: usermail.id,
      },
    };
    const authToken = jwt.sign(data, jwtSecret);
    res.send({ message: "LoggedIn successfully", authToken: authToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

export const getData = async (req, res) => {
  try {
    res.send([global.food, global.foodCategory]);
  } catch (error) {
    return res.status(500).json({ error: "data not found" });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logged Out Successfully",
    });
  } catch {
    return res.status(500).json({ error: "data not found" });
  }
};
