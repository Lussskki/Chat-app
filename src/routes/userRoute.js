import express from 'express'
// Sigup Controller 
import signupController from '../controllers/signupController.js'
const routeSignup = express.Router()

routeSignup.post('/', signupController)


export default routeSignup