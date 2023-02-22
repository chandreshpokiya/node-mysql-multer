import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../config/dbConfig.js";

const User = db.users;

export const loginUser = async (req, res) => {
   if (!req.body.email || !req.body.password) {
      return res.status(400).json("email and password are required");
   }
   try {
      const user = await User.findOne({ where: { email: req.body.email }, attributes: ["id", "name", "email", "password"] });
      if (!user) {
         return res.status(404).json("user not found");
      }
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordCorrect) {
         return res.status(400).json("email or password incorrect");
      }
      const payload = {
         id: user.id,
         name: user.name,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
      return res.cookie("access_token", token, { httpOnly: true }).status(200).json('loggin successful');
   } catch (err) {
      return res.status(500).json(err.message);
   }
};


export const logoutUser = async (req, res) => {
    res.clearCookie('access_token');
    return res.status(200).json('logout successful')
}

