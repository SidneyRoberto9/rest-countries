import { SetStateAction, useEffect, useState } from 'react';

import { api } from './../lib/api';

export default function useCountries(url: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(url)
      .then((response) => setData(response.data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}
