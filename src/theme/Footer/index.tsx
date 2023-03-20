import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';

const Footer = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  const footer = siteConfig.themeConfig.footer as any
  const copyright = footer?.copyright || `Copyright © ${new Date().getFullYear()} kubegems.io .`

  return (
    <footer className='footer' id='footer'>
      <div>
        <div className={styles.footer__left}>
          <img src='./img/logo.svg' style={{ marginTop: '25px' }}></img>
        </div>
        <div className={styles.footer__right}>
          <div style={{ marginTop: '10px', marginLeft: '15px' }}>
            <div>Web: https://kubegems.io</div>
            <div>Email: support@kubegems.io</div>
          </div>
          <div style={{ marginTop: '5px', marginLeft: '15px' }}>
            <div className={styles.footer__title}>更便捷的云原生管理平台</div>
            <div>Let cloudnative management more easily</div>
          </div>
        </div>
        <div className={styles.footer__right}>
          <img src='./img/page/qrcode.png'></img>
        </div>
      </div>
      <div className={styles.footer__clear}></div>
      <div className='text--center'>{copyright}</div>
    </footer >
  )
}

export default Footer
