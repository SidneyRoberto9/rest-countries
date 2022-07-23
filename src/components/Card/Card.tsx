import React from 'react';

import { Country } from '../../models/Country.model';
import { CardStyle } from './styles';

interface CardProps {
  Country: Country;
}

export default function Card({ Country }: CardProps) {
  let population = Intl.NumberFormat().format(Country.population);

  return (
    <CardStyle href={`/details/${Country.name.common}`}>
      <img src={Country.flags.png} alt='flag' />
      <div className='Box'>
        <span>{Country.name.common}</span>
        <div className='info'>
          <p>
            <strong>Population:</strong>
            <b>{population}</b>
          </p>

          <p>
            <strong>Region:</strong> <b>{Country.region}</b>
          </p>

          <p>
            <strong>Capital:</strong> <b>{Country.capital}</b>
          </p>
        </div>
      </div>
    </CardStyle>
  );
}
