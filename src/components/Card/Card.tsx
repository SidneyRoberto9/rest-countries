import React from 'react';

import { Country } from '../../models/Country.model';
import { CardStyle } from './styles';

interface CardProps {
  Country: Country;
}

export default function Card({ Country }: CardProps) {
  return (
    <CardStyle>
      <img src={Country.flags.png} alt='flag' />
      <div className='Box'>
        <span>{Country.name.common}</span>
        <div className='info'>
          <p>
            <strong>Population:</strong>
            <div>{Country.population}</div>
          </p>

          <p>
            <strong>Region:</strong> <div>{Country.region}</div>
          </p>

          <p>
            <strong>Capital:</strong> <div>{Country.capital[0]}</div>
          </p>
        </div>
      </div>
    </CardStyle>
  );
}
