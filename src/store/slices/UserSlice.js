import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
    fetched: false
};

// Thunk to get users
export const getUsers = createAsyncThunk('users/get', async () => {
    try {
        const response = await axios.get('https://wems.onrender.com/roommates');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
});

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'pending';
                state.error = null; 
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'idle';
                state.users = action.payload;
                state.fetched = true; // Set fetched to true
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    }
});

export default UserSlice.reducer;
