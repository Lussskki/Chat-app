import express from 'express'

// Database
import mDb from './database/mDb.js'

const server = express()
const port = 5000



server.listen(port,() =>{
    console.log(`Server listening to port ${port}`)
})