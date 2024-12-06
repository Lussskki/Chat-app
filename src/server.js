import express from 'express'

const server = express()
const port = 5000



server.listen(3000,() =>{
    console.log(`Server listening to port ${port}`)
})