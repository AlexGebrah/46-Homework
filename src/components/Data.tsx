import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";

const Data = () => {
const [city, setCity] = useState('');

    return (
        <div>
            <Form setCity={setCity}/>
            <Weather city={city}/>
        </div>
    );
};

export default Data;