import React from 'react';
import {HeaderContainer} from './Header.styled';
import logoIgnite from '../../assets/logo-ignnite.svg';
import {Scroll, Timer} from 'phosphor-react';
import {NavLink} from 'react-router-dom';

export function Header() {
  return(
    <HeaderContainer>
      <img src={logoIgnite} alt=""></img>
      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='Historico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}