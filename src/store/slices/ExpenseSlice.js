
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    expenses: [],
    status: 'idle',
    error: null,
    fetched: false // New flag to track if data has been fetched
};

// Thunk to get expenses
export const getExpenses = createAsyncThunk('expenses/get', async () => {
    try {
        const response = await axios.get('https://wems.onrender.com/expenses');
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch expenses');
    }
});

// Thunk to add a new expense
export const addExpense = createAsyncThunk('expenses/add', async (expense) => {
    try {
        const response = await axios.post('https://wems.onrender.com/addExpense', expense);
        
        // Check for status code 201
        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error('Failed to add expense'); // This will trigger the rejected case
        }
    } catch (error) {
        throw new Error('Failed to add expense');
    }
});

const ExpenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getExpenses.pending, (state) => {
                state.status = 'pending';
                state.error = null; 
            })
            .addCase(getExpenses.fulfilled, (state, action) => {
                state.status = 'idle';
                state.expenses = action.payload;
                state.fetched = true; // Set fetched to true
            })
            .addCase(getExpenses.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            .addCase(addExpense.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.status = 'idle';
                state.expenses.push(action.payload); // Add the new expense to the state only if the status was 201
            })
            .addCase(addExpense.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    }
});

export default ExpenseSlice.reducer;
