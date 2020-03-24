import useFetch from '../hooks/useFetch';

import { GENERAL_URL, COUNTRIES_URL } from '../services';
const Stats = () => {
  const [stats] = useFetch(GENERAL_URL);
  if (!stats) return <div>Loading......</div>;

  return (
    <div>
      <p>Stats:</p>
      <p>Last Updated: {stats.lastUpdate}</p>
      <p>
        Total Confirmed cases:
        <span>{stats.confirmed.value}</span>
      </p>
      <p>
        Total Recovered:
        <span>{stats.recovered.value}</span>
      </p>
      {/* <p>
        Total Deaths:
        <span>{stats.deaths.value}</span>
      </p> */}
    </div>
  );
};

const CountrySelector = () => {
  const [stats] = useFetch(COUNTRIES_URL);
  if (!stats) return <div>Loading......</div>;
  return (
    <select>
      {stats?.countries.map(country => (
        <option value={country.iso3}>{country.name}</option>
      ))}
    </select>
  );
};

export default function IndexPage() {
  return (
    <>
      <p>Heyyy</p>
      <Stats />
      <CountrySelector />
    </>
  );
}

// https://github.com/github/covid19-dashboard
