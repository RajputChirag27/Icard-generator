import mongoose, { ConnectOptions } from 'mongoose';

const url: string = "mongodb://localhost:27017/icards";

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

module.exports =  connectDB;
