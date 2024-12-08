import User from '../database/schemas/userSchema.js'
import bcrypt from 'bcrypt'
const saltRounds = 10

const signup = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        return res.status(400).json({message: 'Both is required'})
    }

    try{
        const existingUser = await User.findOne({username})

        if(existingUser) {
            return res.status(400).json({message: 'Username is already taken'})
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        // Create a new instance of UserSchema
        const newUser = new User({ username, password: hashedPassword })

        // Save to MongoDB 
        await newUser.save()

        // Exclude password from the response
        const userWithoutPassword = {
        ...newUser.toObject(),
        password: undefined, // Don't send the password back
        }
        
        return res.status(201).json({message: 'User added successfuly'})
    }catch(error){
        console.log(error)
        return res.status(500).json({message: 'Error in signup', error})
    }
}

export default signup
