/*
 * @Author: leon.chen imchensl@163.com
 * @Date: 2022-11-03 12:47:10
 * @LastEditors: leon.chen imchensl@163.com
 * @LastEditTime: 2022-11-03 18:07:23
 * @FilePath: /kubegems.io/src/components/Welcome/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import styles from './index.module.scss';
import style from 'tween-one/es/plugins/StylePlugin';

const Welcome = (props) => {
  return (
    <section id='welcome' className={styles.welcome}>
      <div className={clsx(styles.welcome__content, 'container')}>
        <div className='row'>
          <div className='col col--6'>
            <h1 className={styles.welcome__title}>
              <Texty delay={100}>KubeGems</Texty>
            </h1>
            <div className={styles.welcome__subtitle}>
              <Texty type='bottom' delay={100}>更便捷的云原生管理平台</Texty>
            </div>
            <div className={styles.welcome__desc}>
              <Texty type='alpha' mode='sync' delay={200}>KubeGems 是一款开源的企业级多租户容器云平台。围绕云原生社区，KubeGems 提供了多 Kubernetes 集群接入能力，并具备丰富的组件管理和资源成本分析功能，能够帮助企业快速的构建和打造一个本地化、功能强大且低成本的云管理平台。 </Texty>
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
                to={useBaseUrl('docs/installation/kubegems-install/self-hosted')}>
                Kubernetes 安装
              </Link>
            </TweenOne>
          </div>
          <div className='col col--6'>
            <div className={styles.welcome__video} onClick={() => { props.handleShowPlay() }}>
            </div>
          </div>
        </div>
        {/* <i className={clsx('kubegems-icon icon-scroll', styles.welcome__scroll)} /> */}
      </div>

    </section>
  )
}

export default Welcome
