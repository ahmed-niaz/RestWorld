import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((resp) => resp.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log(`add this to your visited country`);
    const latestVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(latestVisitedCountry);
  };
  return (
    <section className="container mx-auto">
      <div className="text-center text-4xl font-bold">
        Countries {countries.length}
      </div>
      <div>
        <h4>Visited Countries {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 items-center justify-center gap-8">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            cntry={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </section>
  );
}
