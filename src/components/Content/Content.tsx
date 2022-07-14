import React, { useEffect, useState } from 'react';

import useCountries from '../../hooks/useCountries';
import { Country } from '../../models/Country.model';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import { MainContent } from './styles';

export default function Content() {
  const [region, setRegion] = useState<string>('');
  const { data } = useCountries('name/germany');
  console.log(data);
  useEffect(() => {
    console.log(region);
  }, [region]);

  return (
    <MainContent>
      <nav>
        <Search />
        <Filter Region={setRegion} />
      </nav>
      <div className='Cards'>
        {data.map((country, index) => (
          <Card Country={country} key={index} />
        ))}
      </div>
    </MainContent>
  );
}
