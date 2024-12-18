import {putMessage} from "../slices/messageSlice.ts";
import {putWeatherInfo} from "../slices/weatherSlice.ts";
import {api_key, base_url} from "../../utils/constants.ts";
import {AppDispatch} from "../../app/store.ts";

export const fetchWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'))
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            dispatch(putWeatherInfo({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000
            }));
            dispatch(putMessage(''));
        } catch (e) {
            console.log(e);
            if (e instanceof Error) {
                dispatch(putMessage(e.message));
            }
        }
    }
}