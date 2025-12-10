import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
        await mongoose.connect(process.env.MONGODB_URI);
    console.log('Liên kết cơ sở dữ liệu thành công');
  } catch (error) {
    console.error('Liên kết cơ sở dữ liệu thất bại', error);
    process.exit(1);
  } 
};