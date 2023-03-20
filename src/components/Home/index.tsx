import React from 'react';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import TweenOne from 'rc-tween-one';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';

const HomePage = (props) => {
  const brands = [
    {
      id: '1',
      brand: './img/page/logo.png',
    },
    {
      id: '2',
      brand: './img/page/logo.png',
    },
  ]

  return (
    <section id='home' className={styles.home}>
      <div className='row'>
        <div className='col col--6'>
          <div className={styles.home__title}>
            <div className={styles.home__subtitle}>Let cloudnative management more easily</div>
            <div className={styles.home__fisrttitle}>“更便捷”<abbr className={styles.home__fontcolor}>的云原生管理平台</abbr></div>
            <div className={styles.home__desc}>KubeGems 是一款开源的企业级多租户容器云平台。围绕云原生社区，KubeGems 提供了多 Kubernetes 集群接入能力，并具备丰富的组件管理和资源成本分析功能，能够帮助企业快速的构建和打造一个本地化、功能强大且低成本的云管理平台。 </div>
            <TweenOne
              style={{ opacity: 0, marginBottom: -100 }}
              animation={{ opacity: 1, marginBottom: 0 }}
            >
              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                )}
                style={{ marginRight: '15px', marginTop: '5px' }}
                to={useBaseUrl('docs/installation/kubegems-install/self-hosted')}>
                Kubernetes 安装
              </Link>

              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                )}
                style={{ marginRight: '15px', marginTop: '5px' }}
                to="https://demo.kubegems.io">
                一键体验demo
              </Link>

              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                )}
                style={{ marginRight: '15px', marginTop: '5px' }}
                onClick={() => { props.handleShowPlay() }}>
                观看介绍视频
              </Link>
            </TweenOne>
          </div>
        </div>
        <div className='col col--6'>
          <img src='./img/page/home-product.png' className={styles.home__img}></img>
        </div>
      </div>
      {/* <div className='col col--12'>
        <div className={styles.home__partner}>
          <div style={{ marginBottom: '20px' }}>合作伙伴</div>
          <div
            className='row'>
            <div className='col col--1'></div>
            <div className='col col--1'></div>
            <div className='col col--1'></div>
            <div className='col col--1'></div>
            <div className='col col--1'></div>
            {brands.map(item => (
              <div key={item.id} className={clsx(styles.team__item, 'col col--1')}>
                <img src={item.brand}></img>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section >
  )
}

export default HomePage
