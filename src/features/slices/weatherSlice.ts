import {createSlice} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/asyncWeatherAction.ts";

const initialState: WeatherInfo & { status: string; error: string | null } = {
    city: '',
    country: '',
    temp: 0,
    pressure: 0,
    sunset: 0,
    status: 'start',
    error: null,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = "succeeded";
                Object.assign(state, action.payload);
                state.error = null;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload as string;
            });
    },
});

export default weatherSlice.reducer;