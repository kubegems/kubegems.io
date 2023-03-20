import React from 'react';
import styles from './index.module.scss';

const CloudNative = (props) => {
  return (
    <section id='cloudNative' className={styles.cloud}>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.cloud__core}>
            <div>核心功能</div>
            <div className={styles.cloud__core__desc}>KubeGems已经在多个企业中全⾯落 地，稳定运⾏和⽀持⼤量核⼼业务，并将云原⽣赋能到企业</div>
          </div>
        </div>
        <div className='col col--6'>
          <img src='./img/page/cloud-native.png' className={styles.cloud__img__right}></img>
          <div className={styles.cloud__title__left}>
            <div className={styles.cloud__subtitle}>CloudNative</div>
            <div className={styles.cloud__fisrttitle}><abbr className={styles.cloud__fontcolor}>云原生生态</abbr></div>
            <div className={styles.cloud__desc}>以插件的⽅式对云原⽣⽣态内应⽤实现即时插拔。内置丰富的应⽤市场、控制器和服务治理套件，实现对应⽤的⽣命周期、CI/CD和服务治理的全⾯控制</div>
          </div>
        </div>
        <div className='col col--6'>
          <div className={styles.cloud__title__right}>
            <div className={styles.cloud__subtitle}>Observability</div>
            <div className={styles.cloud__fisrttitle}><abbr className={styles.cloud__fontcolor}>可观测性</abbr></div>
            <div className={styles.cloud__desc}>⽀持多种开发语⾔ SDK 集成，兼容OpenTelemetry 协议。内置丰富的监控告警模版与订阅渠道，可满⾜企业多样化的监控系统可视化需求</div>
          </div>
          <img src='./img/page/observability.png' className={styles.cloud__img__left}></img>
        </div>
      </div>

    </section >
  )
}

export default CloudNative
