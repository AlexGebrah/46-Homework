import {FormEvent, useState} from "react";
import {useAppDispatch} from "../app/hooks.ts";
import {setCity} from "../features/citySlice.ts";

const Form = () => {
    const [cityName, setCityName] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setCity(cityName));
        setCityName('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCityName(e.target.value)} type="text" value={cityName}/>
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default Form;