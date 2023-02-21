import db from '../config/dbConfig.js'
import path from 'path';

const User = db.users


export const multerTest = async (req, res) => {
    try {
        const AVATAR_PATH = path.join("/uploads/avatar");
        const user = await User.create({
            name :req.body.name,
            avatar: AVATAR_PATH + '/' + req.file.filename,
            email: req.body.email,
            password: req.body.password
        })
        res.status(201).json(user)
    } catch (err) {
        err ? console.log(err) : '';
    }
}