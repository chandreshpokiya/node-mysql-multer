import db from '../config/dbConfig.js'
import jwt from 'jsonwebtoken'

const User = db.users


export default (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(400).json('access token is missing. please login')
    }
    return jwt.verify(token, process.env.JWT_SECRET, err => {
        if (err) {
            return res.status(400).json('token expired please login again');
        }
        return next()
    })
}