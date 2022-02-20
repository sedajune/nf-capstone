import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: String,
	isChecked: Boolean,
});

const UserData = mongoose.model("UserData", userSchema);

export default UserData;
