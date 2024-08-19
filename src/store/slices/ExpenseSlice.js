// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//     expenses: [],
//     status: 'idle',
//     error: null,
//     fetched: false,
//     expenseStatus: null, // Field to store the HTTP status code of the last addExpense operation
// };

// // Thunk to get expenses
// export const getExpenses = createAsyncThunk('expenses/get', async () => {
//     try {
//         const response = await axios.get('https://wems.onrender.com/expenses');
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to fetch expenses');
//     }
// });

// // Thunk to add a new expense
// export const addExpense = createAsyncThunk('expenses/add', async (expense) => {
//     try {
//         const response = await axios.post('https://wems.onrender.com/addExpense', expense);
        
//         return { data: response.data, status: response.status }; // Return both the response data and the status code
//     } catch (error) {
//         if (error.response) {
//             // If there's an HTTP response but with an error status (e.g., 500)
//             return { data: null, status: error.response.status };
//         } else {
//             throw new Error('Failed to add expense');
//         }
//     }
// });

// const ExpenseSlice = createSlice({
//     name: "expenses",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(getExpenses.pending, (state) => {
//                 state.status = 'pending';
//                 state.error = null; 
//             })
//             .addCase(getExpenses.fulfilled, (state, action) => {
//                 state.status = 'idle';
//                 state.expenses = action.payload;
//                 state.fetched = true; // Set fetched to true
//             })
//             .addCase(getExpenses.rejected, (state, action) => {
//                 state.status = 'rejected';
//                 state.error = action.error.message;
//             })
//             .addCase(addExpense.pending, (state) => {
//                 state.status = 'pending';
//                 state.error = null;
//                 state.expenseStatus = null; // Reset expenseStatus on pending
//             })
//             .addCase(addExpense.fulfilled, (state, action) => {
//                 state.status = 'idle';
//                 if (action.payload.status === 201) {
//                     state.expenses.push(action.payload.data); // Add the new expense to the state only if the status was 201
//                 }
//                 state.expenseStatus = action.payload.status; // Set expenseStatus to the actual HTTP status code
//             })
//             .addCase(addExpense.rejected, (state, action) => {
//                 state.status = 'rejected';
//                 state.error = action.error.message;
//                 state.expenseStatus = action.payload ? action.payload.status : 'error'; // Set to 'error' if no payload
//             });
//     }
// });

// export default ExpenseSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    expenses: [],
    status: 'idle',
    error: null,
    fetched: false,
    expenseStatus: null, // Field to store the HTTP status code of the last addExpense operation
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
        
        return { data: response.data, status: response.status }; // Return both the response data and the status code
    } catch (error) {
        if (error.response) {
            // If there's an HTTP response but with an error status (e.g., 500)
            return { data: null, status: error.response.status };
        } else {
            throw new Error('Failed to add expense');
        }
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
                state.expenseStatus = null; // Reset expenseStatus on pending
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.status === 201) {
                    state.expenses.push(action.payload.data); // Add the new expense to the state only if the status was 201
                }
                state.expenseStatus = action.payload.status; // Set expenseStatus to the actual HTTP status code
            })
            .addCase(addExpense.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
                state.expenseStatus = action.payload ? action.payload.status : 'error'; // Set to 'error' if no payload
            });
    }
});

export default ExpenseSlice.reducer;
