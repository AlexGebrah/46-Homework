import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
   const weather = useAppSelector(state => state.weatherInfo);
   const {status, error, city, country, temp, pressure, sunset} = weather;

    return (
        <div className={'infoWeath'}>
            {status === 'start' && <p>Enter city name</p>}
            {status === "pending" && <p>Loading...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            {status === "succeeded" && (
                <>
                    <p>Location: {country}, {city}</p>
                    <p>Temp: {temp}</p>
                    <p>Pressure: {pressure}</p>
                    <p>Sunset: {new Date(sunset!).toLocaleTimeString()}</p>
                </>
            )}
        </div>
    )
}

export default Weather;