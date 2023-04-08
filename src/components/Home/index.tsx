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
            <div className={styles.home__fisrttitle}>更便捷<abbr className={styles.home__fontcolor}>的云原生
              <div>容器云平台</div>
            </abbr></div>
            <div className={styles.home__subtitle}>Simplify your cloud native journey</div>
            <TweenOne
              style={{ opacity: 0, marginBottom: -100, position: 'relative' }}
              animation={{ opacity: 1, marginBottom: 0 }}
            >
              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                )}
                style={{ marginRight: '15px', marginTop: '5px', float: 'left', width: '150px' }}
                to={useBaseUrl('docs/installation/kubegems-install/self-hosted')}>
                快速开始
              </Link>

              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                  styles.home__login,
                )}
                style={{ marginRight: '15px', marginTop: '5px', float: 'left', width: '150px' }}
                to="https://demo.kubegems.io">
                在线演示
              </Link>

              <div className={styles.home__login__account}>
                <div className={styles.home__login__info}>账号: admin</div>
                <div className={styles.home__login__info}>密码: demo!@#admin</div>
              </div>

              <div
                style={{ marginRight: '15px', marginTop: '5px', float: 'left', lineHeight: '46px' }}
              >
                <img src='./img/page/play.svg' width="45" style={{ cursor: 'pointer' }} onClick={() => { props.handleShowPlay() }}></img>
                <div style={{
                  float: 'right',
                  fontFamily: 'Roboto',
                  fontSize: '16px'
                }}>介绍视频</div>
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
