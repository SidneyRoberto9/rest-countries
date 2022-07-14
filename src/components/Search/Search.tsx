import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { InputSearch } from './styles';

interface SearchProps {
  Search: (search: string) => void;
  value: string;
}

export default function Search({ Search, value }: SearchProps) {
  return (
    <InputSearch>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
      <input
        type='text'
        placeholder='Search for a country...'
        onChange={(e) => Search(e.target.value)}
        value={value}
      />
    </InputSearch>
  );
}
