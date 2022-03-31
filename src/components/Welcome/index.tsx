import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import styles from './index.module.scss';
import style from 'tween-one/es/plugins/StylePlugin';

const Welcome = (): JSX.Element => {
  return (
    <section id='welcome' className={styles.welcome}>
      <div className={clsx(styles.welcome__content, 'container')}>
        <div className='row'>
          <div className='col col--6'>
            <h1 className={styles.welcome__title}>
              <Texty delay={1000}>KubeGems</Texty>
            </h1>
            <div className={styles.welcome__subtitle}>
              <Texty type='bottom' delay={500}>面向云原生的通用型容器云平台</Texty>
            </div>
            <div className={styles.welcome__desc}>
              <Texty type='alpha' mode='sync' delay={1000}>KubeGems 是一款开源的企业级多租户容器云平台。围绕云原生社区，KubeGems 提供了多 Kubernetes 集群接入能力，并具备丰富的组件管理和资源成本分析功能，能够帮助企业快速的构建和打造一个本地化、功能强大且低成本的云管理平台。 </Texty>
            </div>
            <TweenOne
              style={{ opacity: 0, marginBottom: -100 }}
              animation={{ opacity: 1, marginBottom: 0 }}
            >
              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                  styles.welcome__getstart,
                )}
                to={useBaseUrl('docs/installation/quick-install')}>
                Kubernetes 安装 
              </Link>
            </TweenOne>
          </div>
          <div className='col col--6'></div>
        </div>
        <i className={clsx('kubegems-icon icon-scroll', styles.welcome__scroll)} />
      </div>

    </section>
  )
}

export default Welcome
