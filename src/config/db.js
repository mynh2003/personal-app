import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongooseUri = await mongoose.connect(process.env.MONGO_URI);
        
        if(!mongooseUri){
            throw new Error("⚠️ Lỗi không lấy được MONGO_URI trong env");
        }
  
        console.log("✅ Kết nối MongoDB thành công!")

        
    } catch (error) {
        console.log("❌ Lỗi kết nối DB: ", error.message);
        process.exit(1);
    }
}

export default connectDB;