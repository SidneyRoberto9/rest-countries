import React, { Dispatch } from 'react';

import { FilterContainer } from './styles';

interface FilterProps {
  Region: (country: string) => void;
  value: string;
}

export default function Filter({ Region, value }: FilterProps) {
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
    Region(country);
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
          value={value}
        />
        <div className='option'>
          {countries.map((country, index) => (
            <div key={index} onClick={() => handleSelect(country)}>
              {country}
            </div>
          ))}
        </div>
      </div>
    </FilterContainer>
  );
}
