const CountryInfo = ({ filteredQuery }) => {
	return filteredQuery.map((country) => (
		<div key={country.name.common}>
			<h2>{country.name.common}</h2>
			<div>capital: {country.capital}</div>
			<div>area: {country.area}</div>
			<h3>languages: </h3>
			<ul>
				{Object.values(country.languages).map((lang) => (
					<li key={lang}>{lang}</li>
				))}
			</ul>
			<img src={country.flags.png} width="150" alt={country.name.common} />
		</div>
	));
};

export default CountryInfo;