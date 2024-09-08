import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("MongoDB is already connected");
        return
    }
    if (connectionState === 2) {
        console.log("MongoDB is connecting");
        return;
    }
    try {
        mongoose.connect(MONGODB_URL!, {
            dbName: "nextjsrestapi",
            bufferCommands: true
        });
        console.log("MongoDB is connected");
    } catch (error : any) {
        console.log("Error connecting to MongoDB: ", error);
        throw new Error("Error: ", error);
    }
};

export default connect;