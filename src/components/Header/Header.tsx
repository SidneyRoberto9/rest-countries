import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useThemeContext } from '../../hooks/useThemeContext';
import { ButtonStyle, HeaderContainer } from './styles';

export default function Header() {
  const { changeTheme } = useThemeContext();
  return (
    <HeaderContainer>
      <div>
        <h1>Where is the world?</h1>

        <ButtonStyle onClick={changeTheme}>
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Mode</span>
        </ButtonStyle>
      </div>
    </HeaderContainer>
  );
}
