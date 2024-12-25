import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {WeatherInfo, WeatherResponse} from "./types";

export const base_url = 'https://api.openweathermap.org/data/2.5/weather';
export const api_key = '31f99b262592f512e6a7b53896f003c5';

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    reducerPath: 'weatherApi',
    keepUnusedDataFor: 3600,
    refetchOnReconnect: true,
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            transformResponse: (response: WeatherResponse): WeatherInfo => ({
                city: response.name,
                country: response.sys.country,
                temp: response.main.temp,
                pressure: response.main.pressure,
                sunset: response.sys.sunset,
            })
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi