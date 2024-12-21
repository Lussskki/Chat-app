import express from 'express'
import mDb from './database/mDb.js'

import signupRoute from './routes/userRoute.js'
import loginRoute from './routes/loginRoute.js'
import chatRoute from './routes/chatRoute.js'

import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const port = 5000

app.use(express.json())
app.use('/signup', signupRoute)
app.use('/login', loginRoute)
app.use('/chat', chatRoute)

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
