import {configureStore} from "@reduxjs/toolkit";
import city from "../features/citySlice.ts";
import {weatherApi} from "../utils/constants.ts";

export const store = configureStore (
    {
        reducer: {
            city,
            [weatherApi.reducerPath]: weatherApi.reducer
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware)
    }
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch