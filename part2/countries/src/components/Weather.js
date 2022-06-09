import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

const Weather = ({ nameCapital }) => {
	const [city, setCity] = useState({});
	const [viewData, setViewData] = useState(false);
		
	useEffect(() => {
		const api_key = process.env.REACT_APP_API_KEY;

		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameCapital}&appid=${api_key}`)
			.then(response => {
				// console.log("data: ", response.data);
				setCity(response.data);
				setViewData(true);
			});
	}, [nameCapital]);

	return viewData ? <WeatherInfo data={city} /> : undefined;
};

export default Weather;