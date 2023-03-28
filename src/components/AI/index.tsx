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
            <div className={styles.ai__fisrttitle}><abbr className={styles.ai__fontcolor}>应用，AI算法中心</abbr></div>
            <div className={styles.ai__subtitle}>AI</div>
            <div className={styles.ai__desc}>内置应⽤和 AI 算法中⼼，可⼀键化在平台中运⾏，极⼤减⼩企业部署运⾏成本。依托应⽤与算法 商店，可在企业内部构建出 10k+ 应⽤和算法仓库，帮助企业在未来 AI 产业中快速布局与落地</div>
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
            <div className={styles.ai__subtitle}>Cloud Edge</div>
            <div className={styles.ai__desc}>联合 Rancher k3s 共同⽀持云边⼀体化管理。内置边缘设备的统⼀注册、认证流程，⽀持边缘应⽤异步批量化更新。可极⼤提⾼企业 IoT、边缘服务的控制效率</div>
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
