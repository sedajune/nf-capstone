import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
	name: String,
	isChecked: Boolean,
});

const LogData = mongoose.model("LogData", logSchema);

export default LogData;
