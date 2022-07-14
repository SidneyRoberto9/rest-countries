import React from 'react';

import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import { AppStyle } from '../styles/App';

export default function Home() {
  return (
    <AppStyle>
      <Header />
      <Content />
    </AppStyle>
  );
}
