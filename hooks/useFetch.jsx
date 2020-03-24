import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [stats, setStats] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setStats(data);
    };
    fetchData();
  }, []);
  return [stats];
}
