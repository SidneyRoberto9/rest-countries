import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { ButtonStyle, HeaderContainer } from './styles';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <div>
        <h1>Where is the world?</h1>

        <ButtonStyle onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Mode</span>
        </ButtonStyle>
      </div>
    </HeaderContainer>
  );
}
