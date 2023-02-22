import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import mainRouter from './routes/index.js'
import privateRouter from './routes/private.js'

const port = process.env.PORT || 5001;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())


app.use('/uploads', express.static('uploads'))

app.use('/api', mainRouter)
app.use('/private', privateRouter)

app.listen(port, err => {
    err ? console.log(err) : console.log('server is up and running on port ' + port)
})