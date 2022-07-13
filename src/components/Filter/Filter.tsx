import React from 'react';

import { FilterContainer } from './styles';

export default function Filter() {
  const countries = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ];

  const handleSelect = (country: string) => {
    let box = document.querySelector('.textBox');
    box && box.setAttribute('value', country);
  };

  const handleActive = () => {
    let dropdown = document.querySelector('.dropdown');
    dropdown && dropdown.classList.toggle('active');
  };

  return (
    <FilterContainer>
      <div className='dropdown' onClick={handleActive}>
        <input
          type='text'
          className='textBox'
          placeholder='Filter by Region'
          readOnly
        />
        <div className='option'>
          {countries.map((country) => (
            <div onClick={() => handleSelect(country)}>{country}</div>
          ))}
        </div>
      </div>
    </FilterContainer>
  );
}
