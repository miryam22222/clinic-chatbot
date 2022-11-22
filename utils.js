export function sortByCities(data, key) {
    console.log(data)
    if (key === "-" || key === "hot-to-cold") {
        return data.sort((a, b) => {
            return (a.json.current_weather.temperature >= b.json.current_weather.temperature) ? -1 : 1;
        });
    } else {
        return data.sort((a, b) => {
            return (a.json.current_weather.temperature < b.json.current_weather.temperature) ? -1 : 1;
        });
    }
}

export function filterOut(data, key) {
    if (key === "-") {
        return data;
    }

    data.map((city) => {
        for (const continent in key) {
            if (city.cityData.continent === continent) {
                city.filtered = !key[continent];
            }
        }
    });
    return data;
}