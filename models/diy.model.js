import mongoose from "mongoose";

const DiySchema = new mongoose.Schema({
	name: String,
	description: String,
	image: String,
});

export default mongoose.model.Diy || mongoose.model("Diy", DiySchema);
