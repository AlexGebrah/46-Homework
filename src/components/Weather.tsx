import {useState, useEffect} from "react";
import {WeatherInfo} from "../utils/types";
import {api_key, base_url} from "../utils/constants.ts";

interface  Props {
    city: string
}

const Weather = ({city}: Props) => {
   const [message, setMessage] = useState('Enter city name');
   const [weather, setWeather] = useState<WeatherInfo>({});

   const getWeather = async (city: string) => {
       try {
           const responce = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
           if (!responce.ok) {
               throw new Error('Enter correct city name');
           }
           const data = await responce.json();
           setWeather({
               city: data.name,
               country: data.sys.contry,
               temp: data.main.temp,
               pressure: data.main.pressure,
               sunset: data.sys.sunset*1000
           });
           setMessage('')
       } catch (e) {
           if (e instanceof Error) {
               setMessage(e.message);
           }
       }
   }

    useEffect(() => {
        if(city) {
            getWeather(city);
        }
    }, [city]);

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset!).toLocaleTimeString()}</p>
                </>}
        </div>
    )
}

export default Weather;