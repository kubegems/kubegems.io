import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

const Footer = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  const footer = siteConfig.themeConfig.footer as any
  const copyright = footer?.copyright || `Copyright © ${new Date().getFullYear()} kubegems.io .`

  return (
    <footer className='footer' id='footer'>
      <div className='row'>
        <div className='col col--2'>
          <img src='/img/logo.svg' style={{ marginTop: '35px' }}></img>
        </div>
        <div className='col col--7'>
          <div className='row'>
            <div className='col col--2'></div>
            <div className={clsx('col col--10')}>
              <div className={clsx(styles.footer__div)}>
                <div className={styles.footer__link}>文档</div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color
                    )}
                    style={{ marginBottom: '30px', fontWeight: 700 }}
                    to={useBaseUrl('docs/installation/kubegems-install/offline')}>
                    离线安装
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color
                    )}
                    style={{ marginBottom: '30px', fontWeight: 700 }}
                    to={useBaseUrl('docs/installation/kubegems-install/self-hosted')}>
                    快速安装
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color
                    )}
                    style={{ marginBottom: '30px', fontWeight: 700 }}
                    to={useBaseUrl('docs/category/快速入门')}>
                    快速入门
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color
                    )}
                    style={{ marginBottom: '30px', fontWeight: 700 }}
                    to={useBaseUrl('docs/category/开发指南')}>
                    API文档
                  </Link>
                </div>
              </div>

              <div className={clsx(styles.footer__div)}>
                <div className={clsx(styles.footer__link)}>社区</div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color,
                      styles.footer__link__font
                    )}
                    style={{ marginBottom: '30px', }}
                    to={useBaseUrl('https://github.com/kubegems')}>
                    <img width="16px" style={{ marginRight: '5px' }} src="/img/page/github-icon.svg"></img>
                    Github
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color,
                      styles.footer__link__font
                    )}
                    style={{ marginBottom: '30px', }}
                    to={useBaseUrl('https://kubegems.slack.com/')}>
                    <img width="16px" style={{ marginRight: '5px' }} src="/img/page/slack-icon.svg"></img>
                    Slack
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color,
                      styles.footer__link__font
                    )}
                    style={{ marginBottom: '30px', }}
                    to={useBaseUrl('https://twitter.com/KubeGems')}>
                    <img width="16px" style={{ marginRight: '5px' }} src="/img/page/twitter.svg"></img>
                    Twitter
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color,
                      styles.footer__link__font
                    )}
                    style={{ marginBottom: '30px', }}
                    to={useBaseUrl('https://www.youtube.com/@LinkMaq1')}>
                    <img width="16px" style={{ marginRight: '5px' }} src="/img/page/youtube-icon.svg"></img>
                    YouTube
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color,
                      styles.footer__link__font
                    )}
                    style={{ marginBottom: '30px', }}
                    to={useBaseUrl('https://space.bilibili.com/316793859')}>
                    <img width="16px" style={{ marginRight: '5px' }} src="/img/page/bilibili.png"></img>
                    Bilibili
                  </Link>
                </div>
              </div>

              <div className={clsx(styles.footer__div)}>
                <div className={clsx(styles.footer__link)}>更多</div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color,
                      styles.footer__link__font
                    )}
                    style={{ marginBottom: '30px', }}
                    to={useBaseUrl('blog')}>
                    Blog
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color,
                      styles.footer__link__font
                    )}
                    style={{ marginBottom: '30px', }}
                    to={useBaseUrl('https://github.com/kubegems')}>
                    Github
                  </Link>
                </div>
                <div>
                  <Link
                    key='start'
                    className={clsx(
                      styles.footer__link__color
                    )}
                    style={{ marginBottom: '30px', fontWeight: 700 }}
                    to={useBaseUrl('mailto:support@kubegems.io')}>
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col col--1' style={{ marginTop: '20px' }}>
          <img src='/img/page/qrcode.png'></img>
        </div>
        <div className='col col--2' style={{ marginTop: '20px' }}>
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

      <div className='text--center' style={{ marginTop: '30px' }}>{copyright}</div>
    </footer >
  )
}

export default Footer
