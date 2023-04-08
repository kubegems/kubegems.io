import React from 'react';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

const AI = (props) => {
  return (
    <section id='ai' className={styles.ai}>
      <div className='row'>
        <div className='col col--6'>
          <img src='./img/page/edge.png' className={styles.ai__img__right}></img>
          <div className={styles.ai__title__left}>
            <div className={styles.ai__fisrttitle}><abbr className={styles.ai__fontcolor}>AI/机器学习平台</abbr></div>
            <div className={styles.ai__subtitle}>AI/ML Platform</div>
            <div className={styles.ai__desc}>面向开发者和企业的机器学习开发和训练平台，涵盖了模型开发、训练、部署和推理优化等全方位的AI一站式系统。支持自建Model X算法仓库，同时也内置了 10K+ 个开源算法仓库(HuggingFace、OpenMMlab等)，帮助企业快速落地和布局未来的AI产业</div>
            <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/mlserving')}>
              详情{['>']}
            </Link>
          </div>
        </div>
        <div className='col col--6'>
          <div className={styles.ai__title__right}>
            <div className={styles.ai__fisrttitle}><abbr className={styles.ai__fontcolor}>云边一体化</abbr></div>
            <div className={styles.ai__subtitle}>Cloud Edge Fusion</div>
            <div className={styles.ai__desc}>联合 Rancher k3s 共同⽀持云边⼀体化管理。内置边缘设备的统⼀注册、认证流程，⽀持边缘应⽤异步批量化更新。可极⼤提⾼企业 IoT、边缘服务的控制和管理效率</div>
            <Link
              key='start'
              className={clsx(
                'button--primary',
              )}
              style={{ marginBottom: '30px', fontWeight: 700 }}
              to={useBaseUrl('docs/concepts/function/edge')}>
              详情{['>']}
            </Link>
          </div>
          <img src='./img/page/ai.png' className={styles.ai__img__left}></img>
        </div>
      </div>

    </section >
  )
}

export default AI
