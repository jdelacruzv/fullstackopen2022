const WeatherInfo = ({ data }) => {
	console.log(data);
	const KELVIN = 273.15;
	console.log(typeof data.main.temp);

	return (
		<div>
			<h2>Weather in {data.name}</h2>
			<p>temperature: {(data.main.temp - KELVIN).toFixed()} °C</p>
			<img
				src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
				alt={data.weather.description}
			/>
			<p>wind {data.wind.speed} m/s</p>
		</div>
	);
};

export default WeatherInfo;