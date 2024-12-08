import jwt from 'jsonwebtoken'

// Function for generate token
export const generateToken = (_id) => {
    const payload = { userId:_id }
    const secretKey = 'luka'
    const expiresIn = '1h'

    return jwt.sign(payload, secretKey, { expiresIn })
}