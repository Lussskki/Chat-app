import express from 'express'

const route = express.Router()

route.get('/', (req,res)=>{
    res.send('Getting successfully!')
})


export default route