import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import styles from './index.module.scss';

const Welcome = (): JSX.Element => {
  return (
    <section id='welcome' className={styles.welcome}>
      <div className={clsx(styles.welcome__content, 'container')}>
        <div className='row'>
          <div className='col col--6'>
            <h1 className={styles.welcome__title}>
              <Texty>KubeGems</Texty>
            </h1>
            <div className={styles.welcome__subtitle}>
              <Texty type='bottom' delay={500}>面向云原生的通用型容器云平台</Texty>
            </div>
            <div className={styles.welcome__desc}>
              <Texty type='alpha' mode='sync' delay={1000}>作为一个面向云原生的通用型容器云平台，KubeGems从设计之初就支持了面向多集群、多租户的架构，每个用户可以在KubeGems的租户空间内进行友好和人性化的操作，而不用担心自己的服务和数据出现错乱。为帮助企业快速实现容器化，控制IT成本，KubeGems提供提供了安装控制器（Installer Operator）来帮助用户对本产品有一个更好的部署体验。同时也为企业用户提供了功能丰富的支持，例如多Kubernetes集群资源管理、租户访问权限控制、租户资源限制、租户网络隔离、租户网关、存储管理、监控告警、kubernetes事件、操作审计、TLS证书管理、DevOps CD、日志采集、日志分析、微服务治理、链路追逐、服务网格等。 </Texty>
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
                to={useBaseUrl('docs/concepts/what-is-kubegems')}>
                了解更多
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
