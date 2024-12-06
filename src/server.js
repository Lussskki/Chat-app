import express from 'express'
// Database
import mDb from './database/mDb.js'
// Routes
import userRoute from './routes/userRoute.js'

const server = express()
const port = 5000

server.use(express.json())

server.use('/signup', userRoute)


server.listen(port,() =>{
    console.log(`Server listening to port ${port}`)
})