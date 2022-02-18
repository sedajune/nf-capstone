import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
	name: String,
	isChecked: Boolean,
});

const PlantData = mongoose.model("PlantData", plantSchema);

export default PlantData;
