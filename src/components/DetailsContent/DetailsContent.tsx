import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Country } from '../../models/Country.model';
import { DetailContent } from './styles';

interface DetailsContentProps {
  Country: Country[];
}

export default function DetailsContent({
  Country,
}: DetailsContentProps) {
  if (Country[0]) {
    console.log(Country[0]);
    let population = Intl.NumberFormat().format(
      Country[0]?.population
    );

    let languages = Object.keys(Country[0]?.languages).map(function (
      key
    ) {
      return [Number(key), Country[0]?.languages[key]];
    });

    languages = languages.map((obj) => obj[1]).sort();
    const language = languages.join(', ');

    let borders;

    return (
      <DetailContent>
        <a href='/'>
          <FontAwesomeIcon icon={faArrowLeftLong} className='icon' />
          Back
        </a>
        <div className='Box'>
          <img src={Country[0]?.flags.png} alt='flag' />
          <div className='info'>
            <h3>{Country[0]?.name.common}</h3>
            <div className='infoTop'>
              <div className='cap1'>
                <span>
                  <strong>Native Name:</strong>{' '}
                  <b>{Country[0]?.altSpellings[1]}</b>
                </span>
                <span>
                  <strong>Population:</strong> <b>{population}</b>
                </span>
                <span>
                  <strong>Region:</strong> <b>{Country[0]?.region}</b>
                </span>
                <span>
                  <strong>Sub Region:</strong>{' '}
                  <b>{Country[0]?.subregion}</b>
                </span>
                <span>
                  <strong>Capital:</strong>{' '}
                  <b>{Country[0]?.capital[0]}</b>
                </span>
              </div>
              <div className='cap2'>
                <span>
                  <strong>Top Level Domain:</strong>{' '}
                  <b>{Country[0]?.tld[0]}</b>
                </span>
                <span>
                  <strong>Currencies:</strong>{' '}
                  <b>
                    {
                      Country[0]?.currencies[
                        Object.keys(Country[0]?.currencies)[0]
                      ].name
                    }
                  </b>
                </span>
                <span>
                  <strong>languages:</strong> <b>{language}</b>
                </span>
              </div>
            </div>
            <div className='infoBottom'>
              <span>
                <strong>Border Countries:</strong>
                {Country[0]?.borders.map((border) => (
                  <b key={border}>{border}</b>
                ))}
              </span>
            </div>
          </div>
        </div>
      </DetailContent>
    );
  } else {
    return;
  }
}
