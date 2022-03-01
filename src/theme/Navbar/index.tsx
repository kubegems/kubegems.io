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
            <NavbarItem {...item as NavbarItemConfig} key={item.label} />
          ))}
        </div>

        <div className='navbar__items navbar__items--right'>
          {rightItems.map(item => (
            <NavbarItem {...item as NavbarItemConfig} key={item.label} />
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
              key='githu'
              className='navbar__github'
              to="https://github.com/kubegems/kubegems"
            />

            <Link
              key='console'
              className='navbar__login button button--primary'
              to="https://console.cloud.iamidata.com">
              登录控制台
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
