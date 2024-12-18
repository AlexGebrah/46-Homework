import {FormEvent, useState} from "react";
import {fetchWeather} from "../features/api/asyncWeatherAction.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city}/>
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default Form;