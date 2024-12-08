import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    
    if (!token) {
        return res.status(401).json({message: 'Access denied. No Token provided'})
    }

    try{
        const decoded = jwt.verify(token, 'luka')

        req.user = decoded
        console.log('Auth:', req.user)

        next()
    }catch(error){
        return res.status(400).json({message: 'Error with auth'})
    }
}

export default auth