import React, { useEffect, useState } from 'react';

import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import { MainContent } from './styles';

export default function Content() {
  const [region, setRegion] = useState<string>('');

  useEffect(() => {
    console.log(region);
  }, [region]);

  return (
    <MainContent>
      <nav>
        <Search />
        <Filter Region={setRegion} />
      </nav>
    </MainContent>
  );
}
