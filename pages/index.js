
import Message from "../components/message";
import { loadWeatherData } from "../hooks/data";
import citiesData from '../cities.json';
import { sortByCities, filterOut } from '../utils';
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


const checkboxes = [
    {
        name: "America",
        key: "America",
        label: "America"
    },
    {
        name: "Europe",
        key: "Europe",
        label: "Europe"
    },
    {
        name: "Asia",
        key: "Asia",
        label: "Asia"
    },
    {
        name: "Africa",
        key: "Africa",
        label: "Africa"
    }
];

// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {
    const { data, isLoading, isError } = loadWeatherData(citiesData);
    const [sortKey, setSortKey] = useState("-");
    const [checkedItems, setCheckedItems] = useState("-");

    const handleSort = (event) => setSortKey(event.target.value);
    const handleChecked = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked
        });
    }


    if (isLoading) return <Message content="Loading..." />
    if (isError) return <Message content="An error occured..." />
    if (!data) return <Message content="No data could be loaded..." />

    const cities = filterOut(sortByCities(data, sortKey), checkedItems);

}
