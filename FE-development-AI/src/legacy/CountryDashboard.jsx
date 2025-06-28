import React from "react";

class CountryDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedRegion: "all",
      searchTerm: "",
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ countries: data, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
      });
  }

  handleRegionChange = (e) => {
    this.setState({ selectedRegion: e.target.value });
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  filterCountries = () => {
    const { countries, selectedRegion, searchTerm } = this.state;

    return countries.filter((country) => {
      const matchesRegion =
        selectedRegion === "all" || country.region === selectedRegion;
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  };

  renderCountries = () => {
    const filtered = this.filterCountries();

    return (
      <ul style={{ padding: 0, flex: 1, overflowY: "auto" }}>
        {filtered.map((country) => (
          <li
            key={country.cca3}
            style={{
              listStyle: "none",
              marginBottom: "15px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <img
              src={country.flags?.svg}
              alt={`Flag of ${country.name.common}`}
              style={{
                width: "40px",
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            />
            <strong>{country.name.common}</strong> – {country.region}, Pop:{" "}
            {country.population}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { loading, error, selectedRegion, searchTerm } = this.state;

    return (
      <div style={{ padding: 20, display: "flex", flexDirection: "column" }}>
        <h2>Country Dashboard</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!loading && !error && (
          <>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="region">Filter by region: </label>
              <select
                id="region"
                value={selectedRegion}
                onChange={this.handleRegionChange}
                style={{ marginRight: "15px" }}
              >
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>

              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={this.handleSearchChange}
              />
            </div>

            {this.renderCountries()}
          </>
        )}
      </div>
    );
  }
}

export default CountryDashboard;
