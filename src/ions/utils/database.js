import mongoose from "mongoose";
import process from "node:process";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
	cached = { connection: null, promise: null };
	global.mongoose = cached;
}

async function connectMongoDb() {
	console.log("Connecting to DB");
	if (cached.connection) {
		return cached.connection;
	}

	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then(mongoose => {
			return mongoose;
		});
	}
	cached.connection = await cached.promise;
	return cached.connection;
}

export default connectMongoDb;
