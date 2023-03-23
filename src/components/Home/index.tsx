import React from 'react';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TweenOne from 'rc-tween-one';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';

const HomePage = (props) => {
  return (
    <section id='home' className={styles.home}>
      <div className='row'>
        <div className='col col--6'>
          <div className={styles.home__title}>
            <div className={styles.home__subtitle}>Let cloudnative management more easily</div>
            <div className={styles.home__fisrttitle}>“更便捷”<abbr className={styles.home__fontcolor}>的云原生管理平台</abbr></div>
            <TweenOne
              style={{ opacity: 0, marginBottom: -100 }}
              animation={{ opacity: 1, marginBottom: 0 }}
            >
              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                )}
                style={{ marginRight: '15px', marginTop: '5px', float: 'left' }}
                to={useBaseUrl('docs/installation/kubegems-install/self-hosted')}>
                Kubernetes 安装
              </Link>

              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                )}
                style={{ marginRight: '15px', marginTop: '5px', float: 'left' }}
                to="https://demo.kubegems.io">
                一键体验demo
              </Link>

              <div
                style={{ marginRight: '15px', marginTop: '5px', float: 'left', lineHeight: '46px' }}
              >
                <img src='./img/page/play.svg' width="45" style={{ cursor: 'pointer' }} onClick={() => { props.handleShowPlay() }}></img>
                <div style={{
                  float: 'right',
                  fontFamily: 'Roboto',
                  fontSize: '16px'
                }}>观看介绍视频</div>
              </div>
              <div style={{ clear: 'both' }} />
            </TweenOne>
          </div>
        </div>
        <div className='col col--6'>
          <img src='./img/page/home-product.png' className={styles.home__img}></img>
        </div>
      </div >
    </section >
  )
}

export default HomePage
