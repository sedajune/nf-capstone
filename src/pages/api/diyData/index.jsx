import DiyData from "../../../../models/diy.model.js";
import connectMongoDb from "../../../ions/utils/database";

const handler = async (request, response) => {
	const { method } = request;
	await connectMongoDb();
	console.log("handler", request.body);

	switch (method) {
		case "GET":
			try {
				const diy = await DiyData.find({ diyId: request.body });
				response.status(200).json(diy);
			} catch (err) {
				console.log(err);
				response.status(500).send("Sorry, something went wrong");
			}
			break;

		case "POST":
			try {
				console.log("try body request", request.body);
				const diy = await DiyData.create(request.body);
				console.log("mongoDB response", diy);
				response.status(200).json(diy);
			} catch (err) {
				console.log(err);
				response.status(403).send("Sorry, something went wrong");
			}
			break;

		case "PUT":
			try {
				console.log("try body request", request.body);
				const diy = await DiyData.findByIdAndUpdate(request.body, {
					content: request.body.content,
				});
				console.log("mongoDB response", diy);
				response.status(200).json(diy);
			} catch (err) {
				console.log(err);
				response.status(403).send("Sorry, something went wrong");
			}
			break;

		case "DELETE":
			try {
				console.log("try delete: delete is called");
				console.log("try to get info about request DiyCard: ", request.query.DiyId);
				const diy = await DiyData.findByIdAndDelete({
					_id: request.query.DiyId,
				});
				console.log("mongoDB response", diy);
				response.status(200).json(diy);
			} catch (err) {
				console.log(err);
				response.status(403).send("Sorry, something went wrong");
			}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
