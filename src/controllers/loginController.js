import User from "../database/schemas/userSchema.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/jwt.js"


const login = async (req, res) => {
    const { username, password } = req.body

    // Check email and password
    if (!username || !password) {
        return res.status(400).json({ message: `Both email and password are required` })
    }

    try {
        // Find user by email
        const user = await User.findOne({ username })

        // If user is not found
        if (!user) {
            return res.status(401).json({ message: `Not found email or password` })
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            console.log(error)
            return res.status(401).json({ message: `Invalid email or password` })
        }

        // Generate JWT token
        const token = generateToken(user._id)

        // Send token to client and log success message
        return res.status(200).json({ message: `Login successful`, token })
    } catch (err) {
        // Error handling
        console.log(err)
        return res.status(500).json({ message: `Error during login`, err })
    }
}

export default login