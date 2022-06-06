import { useState } from "react";
import CountryInfo from "./CountryInfo";

const ShowCountry = ({ filteredQuery }) => {
	const [info, setInfo] = useState(false);
	const [filter, setFilter] = useState(true);
	const [cty, setCty] = useState({});

	const handleShowInfo = (cty) => {
		setInfo(!info);
		setFilter(!filter);
		setCty(cty);
	};

	const filteredCountries = filteredQuery.map((country) => (
		<div key={country.name.common}>
			<p>
				{country.name.common} {""}
				<button onClick={() => handleShowInfo(country)}>show</button>
			</p>
		</div>
	));

	const countryData = 
		filteredQuery.length === 1 
			? filteredQuery[0] 
			: [cty];

	return (
		<div>
			{filter && filteredCountries}
			{info && <CountryInfo filteredQuery={countryData} />}
		</div>
	);
};

export default ShowCountry;