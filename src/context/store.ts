/* eslint-disable @typescript-eslint/no-misused-promises */
import { writable } from "svelte/store";

type GlobalState = {
  drinkedWater: number;
  exercise: number;
  waterGoal: number;
  exerciseGoal: number;
  waterPerNotification: number;
};

const initialState = {
  drinkedWater: 0,
  exercise: 0,
  waterGoal: 2000,
  exerciseGoal: 5,
  waterPerNotification: 200,
};

const createStorage = () => {
  const { subscribe, set, update } = writable<GlobalState>(initialState);

  return {
    subscribe,
    setWaterGoal: (waterGoal: number) => update((state) => ({ ...state, waterGoal })),
    setExerciseGoal: (exerciseGoal: number) => update((state) => ({ ...state, exerciseGoal })),
    setWaterPerNotification: (waterPerNotification: number) => update((state) => ({
      ...state,
      waterPerNotification,
    })),
    reset: () => set(initialState),
    set,
  };
};

export const store = createStorage();
