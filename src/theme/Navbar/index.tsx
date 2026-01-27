import React, { type ComponentProps, useEffect } from "react";
import clsx from "clsx";
import Toggle from "@theme/Toggle";
import Logo from "@theme/Logo";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import Link from "@docusaurus/Link";
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
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

  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <>
      {/* 全站商业版本迁移通知 */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '8px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.25)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        fontSize: '14px'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '2px 10px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600'
          }}>
            📢 通知
          </span>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>
            由于运营压力，KubeGems 社区版已停更，感谢大家的支持
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>|</span>
          <span style={{ fontSize: '14px' }}>
            访问：
            <a 
              href="https://poxiaoshi.cn" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '600',
                marginLeft: '6px',
                padding: '4px 12px',
                background: 'rgba(255, 255, 255, 0.25)',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              poxiaoshi.cn →
            </a>
            {' '}获取商业版支持
          </span>
        </div>
      </div>
      <nav
        ref={navbarRef}
        style={{ top: '38px' }}
        className={clsx("navbar", "navbar--fixed-top",
        // !isNavbarVisible && styles.navbarShown,
        // !hideOnScroll || [
        //   styles.navbarHideable,
        //   isNavbarVisible && styles.navbarHidden,
        // ],
        // !isHomePage && styles.navbarShown,
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          'navbar-sidebar--show': mobileSidebar.shown,
        })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {<NavbarMobileSidebarToggle />}

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
            {!colorModeToggle.disabled && (
              <Toggle
                key="toggle"
                className="navbar__dark"
                checked={colorModeToggle.colorMode === "dark"}
                onChange={colorModeToggle.toggle}
              />
            )}

            {
              <Link
                key="github"
                className="navbar__github"
                to="https://github.com/kubegems"
              />
            }

            {/* <Link
              key="console"
              className="navbar__login button button--primary"
              to="https://demo.kubegems.io"
            >
              体验 Demo
            </Link>

            <div className="navbar__login__account">
              <div className="navbar__login__info">账号: admin</div>
              <div className="navbar__login__info">密码: demo!@#admin</div>
            </div> */}
          </div>
        </div>
      </div>

      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
    </>
  );
};

export default Navbar;
