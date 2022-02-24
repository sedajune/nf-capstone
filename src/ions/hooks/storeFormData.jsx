import create from "zustand";
import { v4 as uuid } from "uuid";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		set => {
			return {
				plantCards: [],

				seedCards: [],

				logCards: [],

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
				type: [
					{
						value: "seeds",
						label: "seeds",
					},
					{
						value: "seedlings",
						label: "seedlings",
					},
				],
				setPlantCard: data =>
					set(state => ({ plantCards: [...state.plantCards, { ...data, id: uuid() }] })),

				setSeedCard: data =>
					set(state => ({ seedCards: [...state.seedCards, { ...data, id: uuid() }] })),

				setLogCard: data =>
					set(state => ({ logCards: [...state.logCards, { ...data, id: uuid() }] })),

				images: [],
				setImages: uploadedImages => set({ images: uploadedImages }),

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
