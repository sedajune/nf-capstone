//import process from "node:process";
import SeedData from "../../../../models/seed.model";
import connectMongoDb from "../../../ions/utils/database";

const handler = async (request, response) => {
	const { method } = request;
	await connectMongoDb();
	console.log("handler", request.body);

	switch (method) {
		case "GET":
			try {
				const mongoResponse = await SeedData.find({ userId: request.body });
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(500).send("Sorry, something went wrong");
			}
			break;

		case "POST":
			try {
				console.log("try body request", request.body);
				const mongoResponse = await SeedData.create(request.body);
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(403).send("Sorry, something went wrong");
			}
			break;

		case "PUT":
			try {
				console.log("try body request", request.body);
				const mongoResponse = await SeedData.findByIdAndUpdate(request.body, {
					content: request.body.content,
				});
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
				response.status(403).send("Sorry, something went wrong");
			}
			break;

		case "DELETE":
			try {
				console.log("try delete: delete is called");
				console.log("try to get info about request seedCard: ", request.query.seedId);
				const mongoResponse = await SeedData.findByIdAndDelete({
					_id: request.query.SeedId,
				});
				console.log("mongoDB response", mongoResponse);
				response.status(200).json(mongoResponse);
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
