import mongoose from "mongoose";

const diySchema = new mongoose.Schema({
	name: String,
	isChecked: Boolean,
});

const diyData = mongoose.model("DiyData", diySchema);

export default DiyData;
