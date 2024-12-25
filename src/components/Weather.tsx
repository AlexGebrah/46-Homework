import {useGetWeatherByCityQuery} from "../utils/constants.ts";
import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
  const city = useAppSelector(state => state.city);
    const {data, error, isLoading} = useGetWeatherByCityQuery(city);

    if(!city) {
        return <div className={'infoWeath'}>Enter city name</div>
    }

    if(isLoading) {
        return <div className={'infoWeath'}>Pending...</div>
    }

    if(error) {
        return <div className={'infoWeath'}>Enter correct city name</div>
    }

    const sunsetTime = data?.sunset
        ? new Date(data.sunset * 1000).toLocaleTimeString()
        : 'Unknown';

    return (
        <div className={'infoWeath'}>
            {!!data &&
                <>
                    <p>Weather in {data?.city}, {data?.country}</p>
                    <p>Temperature: {data?.temp}°C</p>
                    <p>Pressure: {data?.pressure} hPa</p>
                    <p>Sunset: {sunsetTime}</p>
                </>}
        </div>
    )
}

export default Weather;