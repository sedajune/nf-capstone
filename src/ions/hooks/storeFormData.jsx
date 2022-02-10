import create from "zustand";
import { v4 as uuid } from "uuid";
//import { persist } from "zustand/middleware";

const useStore = create(
	//persist(
	set => {
		return {
			plantCards: [],
			plantSpaces: [
				{
					value: "garden",
					label: "garden",
				},
				{
					value: "piece of land",
					label: "piece of land",
				},
				{
					value: "terrace",
					label: "terrace",
				},
				{
					value: "balcony",
					label: "balcony",
				},
				{
					value: "other",
					label: "other",
				},
			],
			soilQualities: [
				{
					value: "clay",
					label: "clay",
				},
				{
					value: "sandy",
					label: "sandy",
				},
				{
					value: "loamy",
					label: "loamy",
				},
				{
					value: "chalky",
					label: "chalky",
				},
				{
					value: "silty",
					label: "silty",
				},

				{
					value: "peaty",
					label: "peaty",
				},
			],
			setPlantCard: data =>
				set(state => ({ plantCards: [...state.plantCards, { ...data, id: uuid() }] })),

			//bookmarkedCards: id => {
			//set(state => ({
			//plantCards: [{}],
			//}));
		};
	}
	//,
	//{ name: "plantForm" }
	//)
);

export default useStore;
