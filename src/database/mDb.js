import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://lukaguledani123:lukaluka@cluster0.jncco.mongodb.net/'

const connectDb = async () => {
try{
    mongoose.connect(connectionString)
    console.log('Database is connected')
}catch(error){
    console.log('Error with database connection', error)
} 
}

// Function invoke
connectDb()

export default connectDb