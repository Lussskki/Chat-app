import express from 'express'
import chatController from '../controllers/chatController.js'

const chatRoute = express.Router()

chatRoute.get('/', chatController)

export default chatRoute