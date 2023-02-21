import multer from "multer";

import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = path.join(dirname(fileURLToPath(import.meta.url)));

const AVATAR_PATH = path.join("/uploads/avatar");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", AVATAR_PATH));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

export default storage;