import useSWR from "swr";
import { WEATHER_ENDPOINT } from "../config";


function arrayFetcher(...urlArr) {
    const fetcher = (u) => fetch(u.url).then((res) => res.json().then((json) => {
        return {
            json: json,
            cityData: u.city
        }
    }));
    const result = Promise.all(urlArr.map(fetcher));
    // result.then((res) => console.log(res))
    return result;
}

export function loadWeatherData(cityCoords) {
    const urlArray = cityCoords.map((city) => {
        return {
            url: `${WEATHER_ENDPOINT}?latitude=${city.lat}&longitude=${city.long}&current_weather=true`,
            city: city
        }
    });
    const { data, error } = useSWR(urlArray, arrayFetcher);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

