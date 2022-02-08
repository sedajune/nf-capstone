import create from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		set => {
			return {
				plantCards: [],
				setPlantCard: data =>
					set(state => ({ plantCards: [...state.plantCards, { ...data, id: uuid() }] })),
			};
		},
		{ name: "plantForm" }
	)
);

export default useStore;
