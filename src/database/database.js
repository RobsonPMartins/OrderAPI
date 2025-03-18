// conection DB mongoose
const mongoose = require('mongoose')
const config = require('../config/config')

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('DB conection sucesss! 🍃');
    } catch (error) {
        console.log('Error conection DB ❌', error);
    }
}

module.exports = connectDB