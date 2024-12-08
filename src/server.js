import express from 'express'
// Database
import mDb from './database/mDb.js'
// Routes
import signupRoute from './routes/userRoute.js'
import loginRoute from './routes/loginRoute.js'

const server = express()
const port = 5000

server.use(express.json())

server.use('/signup', signupRoute)
server.use('/login', loginRoute)


server.listen(port,() =>{
    console.log(`Server listening to port ${port}`)
})