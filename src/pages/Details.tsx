import React from 'react';
import { useParams } from 'react-router-dom';

import DetailsContent from '../components/DetailsContent/DetailsContent';
import Header from '../components/Header/Header';
import useCountries from '../hooks/useCountries';
import { AppStyle } from '../styles/App';

export default function Details() {
  const { name } = useParams();
  const { data } = useCountries(`name/${name}`);

  return (
    <AppStyle>
      <Header />
      <DetailsContent Country={data} />
    </AppStyle>
  );
}
