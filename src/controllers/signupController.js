import User from '../database/schemas/userSchema.js'


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

        const newUser = new User({username, password})
        await newUser.save()

        return res.status(201).json({message: 'User added successfuly'})
    }catch(error){
        console.log(error)
        return res.status(500).json({message: 'Error in signup', error})
    }
}

export default signup
