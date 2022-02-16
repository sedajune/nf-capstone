import create from "zustand";
import { v4 as uuid } from "uuid";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		set => {
			return {
				plantCards: [
					{
						bookmarked: false,
						contactInfo: "Sam@cat.com",
						description: "Looking for a plant buddy in Hamburg",
						id: "f56b4320-ab62-4c80-9303-1f58c9273c08",
						location: "Hamburg Winterhude",
						number: "3",
						size: "5",
						soilQuality: "sandy",
						spaceType: "garden",
						tellMeMore:
							"Hi my name is Sam and I am looking for a plant buddy in Hamburg as I own a little garden and would love to share it with someone like you. Feel free to contact me via email. Cheers!",
					},
					{
						bookmarked: false,
						contactInfo: "Pam@cat.com",
						description: "Looking for a plant buddy in Berlin",
						id: "f56b4320-ab62-4c80-9303-1f58c92738",
						location: "Berlin",
						number: "1",
						size: "2",
						soilQuality: "loamy",
						spaceType: "balcony",
						tellMeMore:
							"Hi my name is Pam and my apartment has a huge balcony, where there´s plenty of sun throughout the day. I would like to grow some fruit and veg, would you like to join?",
					},
				],
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

				setBookmark: index =>
					set(
						produce(state => {
							state.plantCards[index].bookmarked =
								!state.plantCards[index].bookmarked;
						})
					),
			};
		},
		{ name: "plantForm" }
	)
);

export default useStore;
