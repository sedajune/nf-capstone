import { MongoClient } from "mongodb";

let client;

export async function connectDatabase(url) {
	client = new MongoClient(url);
	await client.connect();
}

export function getData(name) {
	return client.db().collection(name);
}

export function getPlantData() {
	return getData("plantData");
}

export function getSeedData() {
	return getData("seedData");
}
