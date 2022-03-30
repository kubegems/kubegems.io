import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import SearchBar from '@theme/SearchBar';
import Toggle from '@theme/Toggle';
import Logo from '@theme/Logo';
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import Link from '@docusaurus/Link';
import {
  useThemeConfig,
  useMobileSecondaryMenuRenderer,
  usePrevious,
  useHistoryPopHandler,
  useHideableNavbar,
  useLockBodyScroll,
  useWindowSize,
  useColorMode,
} from '@docusaurus/theme-common';
import { useNavbarItems, useColorModeToggle } from './hooks'
import './styles.scss';

const Navbar = (): JSX.Element => {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const colorModeToggle = useColorModeToggle();

  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  const { items, rightItems, leftItems } = useNavbarItems();
  const hasSearchNavbarItem = items.some((item) => item.type === 'search');

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary'
        }
      )}>
      <div className='navbar__inner'>
        <div className='navbar__items'>
          <Logo
            className='navbar__brand'
            imageClassName='navbar__logo'
            titleClassName='navbar__title'
          />
          {leftItems.map(item => (
            <NavbarItem {...item as NavbarItemConfig} key={item.key} />
          ))}
        </div>

        <div className='navbar__items navbar__items--right'>
          {rightItems.map(item => (
            <NavbarItem {...item as NavbarItemConfig} key={item.key} />
          ))}

          <div className='navbar__items navbar__item--dock'>
            {!colorModeToggle.disabled && (
              <Toggle
                key='toggle'
                className='navbar__toggle'
                checked={colorModeToggle.isDarkTheme}
                onChange={colorModeToggle.toggle}
              />
            )}
            <Link
              key='github'
              className='navbar__github'
              to="https://github.com/kubegems"
            />

            <Link
              key='console'
              className='navbar__login button button--primary'
              to='https://demo.kubegems.io'
            >
              体验 Demo 
            </Link>

            <div className='navbar__login__account'>
              <div className='navbar__login__info'>账号: admin</div>
              <div className='navbar__login__info'>密码: demo!@#admin</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
