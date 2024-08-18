import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    report: [],
    status: 'idle',
    error: null,
    fetched: false, // New flag to track if data has been fetched
    start_date:null,
    end_date:null,
};

// Thunk to get weekly report
export const getReport = createAsyncThunk('weeklyreport/get', async (date) => {
    try {
        const response = await axios.get(`https://wems.onrender.com/weekly_report?start_date=${date}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weekly report');
    }
});

const WeeklyStatsSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReport.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getReport.fulfilled, (state, action) => {
                state.status = 'idle';
                state.report = action.payload.report; // Store the fetched report data
                state.fetched = true; // Set fetched to true
                state.start_date=action.payload.week_start_date;
                state.end_date=action.payload.week_end_date;
            })
            .addCase(getReport.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    }
});

export default WeeklyStatsSlice.reducer;
