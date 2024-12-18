import {api_key, base_url} from "../../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error("Enter correct city name");
            }
            const data = await response.json();
            return {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000,
            };
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
        }
    }
);