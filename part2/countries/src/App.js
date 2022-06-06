import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import ListCountry from "./components/ListCountry";

const App = () => {
  const [countries, setContries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        // console.log("data:", response)
        setContries(response.data);
      });
  }, []);

  const handleSearch = (event) => setSearch(event.target.value);  

  return (
    <div>
      <SearchForm query={search} handleSearch={handleSearch} />
      <ListCountry query={search} countries={countries}/>
    </div>
	);
}

export default App;