import express from 'express'
// Login Controller
import loginController from '../controllers/loginController.js'
const routeLogin = express.Router()

routeLogin.post('/', loginController)

export default routeLogin
