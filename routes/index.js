import { Router } from "express";
import multer from "multer";
import { loginUser, logoutUser } from "../controllers/authController.js";
import { addUser, deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/UserController.js";
import avatarStorage from "../middleware/avatarstorage.js";

const router = Router();

router.post("/user", multer({ storage: avatarStorage }).single("avatar"), addUser);
router.get('/user', getAllUser)
router.get('/user/:id', getSingleUser)

router.delete('/user/:id', deleteUser)
router.patch('/user/:id', multer({ storage: avatarStorage }).single("avatar") ,updateUser)


router.post('/auth', loginUser)
router.get('/logout', logoutUser)

export default router;
