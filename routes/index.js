import { Router } from "express";
import multer from "multer";
import { multerTest } from "../controllers/UserController.js";
import avatarStorage from "../middleware/avatarstorage.js";

const router = Router();

router.post("/test", multer({ storage: avatarStorage }).single("avatar"), multerTest);

export default router;
