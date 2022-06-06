import Weather from "./Weather";

const CountryInfo = ({ filteredQuery }) => {
	return filteredQuery.map((country) => (
		<div key={country.name.common}>
				<h1>{country.name.common}</h1>
				<div>capital: {country.capital}</div>
				<div>area: {country.area}</div>
				<h3>languages: </h3>
				<ul>
					{Object.values(country.languages).map((lang) => (
						<li key={lang}>{lang}</li>
					))}
				</ul>
				<img src={country.flags.png} width="150" alt={country.name.common} />
				<Weather nameCapital={country.capital} />
		</div>
	));
};

export default CountryInfo;