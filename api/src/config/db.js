const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Đọc file .env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Đã kết nối MongoDB');
    } catch (err) {
        console.error('❌ Kết nối MongoDB thất bại:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
