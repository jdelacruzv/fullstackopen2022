const SearchForm = ({ query, handleSearch }) => {
	return (
		<label>
			Find countries: <input type="text" value={query} onChange={handleSearch} />
		</label>
	);
};

export default SearchForm;