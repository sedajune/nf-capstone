import mongoose from "mongoose";

const seedSchema = new mongoose.Schema({
	name: String,
	isChecked: Boolean,
});

const SeedData = mongoose.model("SeedData", seedSchema);

export default SeedData;
