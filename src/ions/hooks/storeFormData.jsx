import create from "zustand";
import { v4 as uuid } from "uuid";

const useStore = create(set => {
	return {
		plantCards: [],
		setPlantCard: data =>
			set(state => ({ plantCards: [...state.plantCards, { ...data, id: uuid() }] })),
	};
});

export default useStore;
