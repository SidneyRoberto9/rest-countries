import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { InputSearch } from './styles';

export default function Search() {
  return (
    <InputSearch>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
      <input type='text' placeholder='Search for a country...' />
    </InputSearch>
  );
}
