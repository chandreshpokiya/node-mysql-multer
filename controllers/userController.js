import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = path.join(dirname(fileURLToPath(import.meta.url)));

import db from "../config/dbConfig.js";

const User = db.users;

export const addUser = async (req, res) => {
   try {
      const AVATAR_PATH = path.join("/uploads/avatar");
      const user = await User.create({
         name: req.body.name,
         avatar: AVATAR_PATH + "/" + req.file.filename,
         email: req.body.email,
         password: req.body.password,
      });
      res.status(201).json(user);
   } catch (err) {
      err ? console.log(err) : "";
   }
};

export const getAllUser = async (req, res) => {
   try {
      const users = await User.findAll({});
      res.status(200).json(users);
   } catch (err) {
      res.status(500).json("something went wrong");
   }
};

export const getSingleUser = async (req, res) => {
   try {
      const id = req.params.id;
      const user = await User.findOne({ where: { id: id } });
      res.status(200).json(user);
   } catch (err) {
      res.status(500).json("something went wrong");
   }
};

export const deleteUser = async (req, res) => {
   try {
      const id = req.params.id;
      const user = await User.findOne({ where: { id: id } });

      fs.unlinkSync(path.join(__dirname, "..", user.avatar));

      const deletedUser = await User.destroy({ where: { id: id } });
      deletedUser && res.status(200).json("user deleted successfully");
   } catch (err) {
      res.status(500).json("something went wrong");
   }
};

export const updateUser = async (req, res) => {
   try {
      const id = req.params.id;
      if (req.file) {
         const user = await User.findOne({ where: { id: id } });
         fs.unlinkSync(path.join(__dirname, "..", user.avatar));

         const { name, email, password } = req.body;
         const AVATAR_PATH = path.join("/uploads/avatar");
         const isUpdatedUser = await User.update(
            {
               name,
               avatar: AVATAR_PATH + "/" + req.file.filename,
               email,
               password,
            },
            { where: { id } }
          );
          
          isUpdatedUser && res.status(200).json('user updated successfully')
      } else {
         const newObj = req.body;
         const isUpdated = await User.update(newObj, { where: { id: id } });
         isUpdated && res.status(200).json("user updated successfully");
      }
   } catch (err) {
      return res.status(500).json("something went wrong");
   }
};
