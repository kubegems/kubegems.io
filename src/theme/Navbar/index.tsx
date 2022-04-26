import React, { type ComponentProps, useEffect } from "react";
import clsx from "clsx";
import Toggle from "@theme/Toggle";
import Logo from "@theme/Logo";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import Link from "@docusaurus/Link";
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import {
  useThemeConfig,
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common";
import { useNavbarItems, useColorModeToggle } from "./hooks";
import "./styles.scss";
import styles from './styles.module.css';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

const Navbar = (): JSX.Element => {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const colorModeToggle = useColorModeToggle();

  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  const { items, rightItems, leftItems } = useNavbarItems();

  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 996;

  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <nav
      ref={navbarRef}
      className={clsx("navbar", "navbar--fixed-top",
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          'navbar-sidebar--show': mobileSidebar.shown,
        })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {!isDesktop && <NavbarMobileSidebarToggle />}

          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
          />
          {leftItems.map((item) => (
            <NavbarItem {...(item as NavbarItemConfig)} key={item.key} />
          ))}
        </div>

        <div className="navbar__items navbar__items--right">
          {rightItems.map((item) => (
            <NavbarItem {...(item as NavbarItemConfig)} key={item.key} />
          ))}

          <div className="navbar__items navbar__item--dock">
            {isDesktop && !colorModeToggle.disabled && (
              <Toggle
                key="toggle"
                className="navbar__toggle"
                checked={colorModeToggle.colorMode === "dark"}
                onChange={colorModeToggle.toggle}
              />
            )}

            {isDesktop &&
              <Link
                key="github"
                className="navbar__github"
                to="https://github.com/kubegems"
              />
            }

            <Link
              key="console"
              className="navbar__login button button--primary"
              to="https://demo.kubegems.io"
            >
              体验 Demo
            </Link>

            <div className="navbar__login__account">
              <div className="navbar__login__info">账号: admin</div>
              <div className="navbar__login__info">密码: demo!@#admin</div>
            </div>
          </div>
        </div>
      </div>

      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
};

export default Navbar;
