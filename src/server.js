import express from 'express'
import route from './routes/chatRoute.js'


const app = express()


app.use('/3000', route)





app.listen(3000, () => {
  console.log('Server running on port 3000')
})
