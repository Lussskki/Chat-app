import express from 'express'
import http from 'http'
import { Server as SocketServer } from 'socket.io'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(path.resolve('')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./src/index.html'))
})

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id)

  socket.on('message', (data) => {
    console.log('Message received:', data)
    io.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id)
  })
})

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
