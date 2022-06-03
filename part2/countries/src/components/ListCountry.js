import ShowCountry from "./ShowCountry";

const ListCountry= ({ query, countries }) => {
	const filteredByQuery = countries
		.filter(country =>
			country.name.common.toLowerCase().startsWith(query.toLowerCase())
		);

	const showContries = filteredByQuery.map((country) => (
		<div key={country.name.common}>
			<p>{country.name.common}</p>
		</div>
	));	

	return (
		!query 
			? <p></p>
			: filteredByQuery.length > 10 
				? <p>Too many macthes, specify another filter</p>
				: filteredByQuery.length !== 1
					? showContries
					:	<ShowCountry filteredByQuery={filteredByQuery} />
	);
};

export default ListCountry;