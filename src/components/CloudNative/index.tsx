import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const CloudNative = (props) => {

  return (
    <section id='cloudNative' className={styles.cloud}>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.cloud__core}>
            <div>核心功能</div>
            <div className={styles.cloud__core__desc}>KubeGems 已经帮助多家企业成功建立内部云平台，并为众多用户的核心业务提供了稳定、长期的支持<br/>我们致力于协助企业将云原生技术高效、便捷地应用于您的生产业务系统，为您的业务注入强大的动力</div>
          </div>
        </div>
        <div className='col col--6'>
          <img src='./img/page/cloud-native.png' className={styles.cloud__img__right}></img>
          <div className={styles.cloud__title__left}>
            <div className={styles.cloud__fisrttitle}><abbr className={styles.cloud__fontcolor}>可观测性</abbr></div>
            <div className={styles.cloud__subtitle}>Observability</div>
            <div className={styles.cloud__desc}>与 Rancher k3s联合，支持云边一体化管理。内置了边缘设备的统一注册和认证机制。支持边缘应用的异步批量化更新。极大地提高企业 IoT 和边缘架构下的应用控制和管理效率</div>
            <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/observability')}>
              详情{['>']}
            </Link>
          </div>
        </div>
        <div className='col col--6'>
          <div className={styles.cloud__title__right}>
            <div className={styles.cloud__fisrttitle}><abbr className={styles.cloud__fontcolor}>云原生生态</abbr></div>
            <div className={styles.cloud__subtitle}>CloudNative</div>
            <div className={styles.cloud__desc}>提供跨多云和多集群的集中统一管理，并以插件的⽅式对云原⽣⽣态内应⽤实现即时插拔。内置丰富的应⽤市场、控制器和服务治理套件，实现对应⽤的⽣命周期、CI/CD和服务治理的全⾯管理</div>
            <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/apps')}>
              详情{['>']}
            </Link>
          </div>
          <img src='./img/page/observability.png' className={styles.cloud__img__left}></img>
        </div>
      </div>

    </section >
  )
}

export default CloudNative
