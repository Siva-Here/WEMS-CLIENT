import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import ExpenseSlice from './slices/ExpenseSlice';
import WeeklyStatsSlice from './slices/WeeklyStatsSlice'
import AuthSlice from './slices/AuthSlice';
import { saveState, loadState } from './localStorageUtils'; // Import utility functions

// Load the initial state from local storage
const preloadedState = loadState();

const store = configureStore({
    reducer: {
        users: userSlice,
        expenses: ExpenseSlice,
        report: WeeklyStatsSlice,
        auth: AuthSlice
    },
    preloadedState // Initialize store with loaded state
});

// Subscribe to store changes to save state to local storage
store.subscribe(() => {
    saveState({
        users: store.getState().users,
        expenses: store.getState().expenses,
        report: store.getState().report,
        auth: store.getState().auth
    });
});

export default store;
