
import Message from "../components/message";
import { loadWeatherData } from "../hooks/data";
import citiesData from '../cities.json';
import { sortByCities } from '../utils';
import { useState } from "react";


function getEmoji(temperature) {
    if (temperature > 20) {
        return "☀";
    } else if (temperature > 6) {
        return "☁";
    } else {
        return "❄";
    }
}


// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
    const { data, isLoading, isError } = loadWeatherData(citiesData);
    const [sortKey, setSortKey] = useState("-");
    if (isLoading) return <Message content="Loading..." />
    if (isError) return <Message content="An error occured..." />
    if (!data) return <Message content="No data could be loaded..." />

    const cities = sortByCities(data, sortKey);

    return (
        <div className="row">
            {
                cities.map(record => {
                    const temperature = record.json.current_weather.temperature;
                    return (
                        <div key={record.cityData.name} className="item">
                            <h3 className="city">{record.cityData.name}</h3>
                            <p className="emoji">{getEmoji(temperature)}</p>
                            <h1 className="temperature">{temperature}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
