
import Message from "../components/message";
import { loadWeatherData } from "../hooks/data";
import citiesData from '../cities.json';
import { sortByCities, filterOut } from '../utils';
import { createContext, useState } from "react";
import SortFilter from "../components/sort-filter";

const CONTINENTS = 4;

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
    const [checked, setChecked] = useState(new Array(CONTINENTS).fill(true));

    const handleSort = (event) => setSortKey(event.target.value);
    const handleFilter = (event) => setFilterKey(event.target.value);

    if (isLoading) return <Message content="Loading..." />
    if (isError) return <Message content="An error occured..." />
    if (!data) return <Message content="No data could be loaded..." />

    const cities = filterOut(sortByCities(data, sortKey), filterKey);

    return (
        <>
            <SortFilter sortHandler={handleSort} filterHandler={handleFilter} />
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
        </>
    )
}
