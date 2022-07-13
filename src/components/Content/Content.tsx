import React from 'react';

import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import { MainContent } from './styles';

export default function Content() {
  return (
    <MainContent>
      <nav>
        <Search />
        <Filter />
      </nav>
    </MainContent>
  );
}
