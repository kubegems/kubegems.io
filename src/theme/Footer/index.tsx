import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';

const Footer = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  const footer = siteConfig.themeConfig.footer as any
  const copyright = footer?.copyright || `Copyright © ${new Date().getFullYear()} kubegems.io .`

  return (
    <footer className='footer' id='footer'>
      <div className='row'>
        <div className='col col--2'>
          <img src='./img/logo.svg' style={{ marginTop: '25px' }}></img>
        </div>
        <div className='col col--7'>
          {/* <div className='row'>
            <div className='col col--3'></div>
            <div className='col col--3'>
              产品
            </div>
            <div className='col col--3'>
              关于
            </div>
            <div className='col col--3'>
              联系我们
            </div>
          </div> */}
        </div>
        <div className='col col--1'>
          <img src='./img/page/qrcode.png'></img>
        </div>
        <div className='col col--2'>
          <div >
            <div>Web: https://kubegems.io</div>
            <div>Email: support@kubegems.io</div>
          </div>
          <div style={{ marginTop: '5px' }}>
            <div className={styles.footer__title}>更便捷的云原生管理平台</div>
            <div>Let cloudnative management more easily</div>
          </div>
        </div>
      </div>

      <div className='text--center'>{copyright}</div>
    </footer >
  )
}

export default Footer
