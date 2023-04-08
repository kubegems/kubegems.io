import React from 'react';
import styles from './index.module.scss';

const Benefit = (props) => {
  return (
    <section id='benefit' className={styles.benefit}>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.benefit__title}>
            <div>KubeGems Prime</div>
          </div>
        </div>
        <div className='col col--4'>
          <div className={styles.benefit__desc__left}>
            <img src='./img/page/guarantee.png' className={styles.benefit__img}></img>
            <div className={styles.benefit__desc}>
              <div className={styles.benefit__desc__title}>生产保证</div>
              <div className={styles.benefit__desc__content}>KubeGems 团队将为您提供企业级的⽣产环境落地技术⽀持（ 5*8 标准版/ 7*24 白金版 ），提供有保证的⽀持响应速度。全程协助客户在第⼀时间解决问题, 稳定版本的平滑升级，以及重大安全漏洞的及时更新</div>
            </div>
          </div>
        </div>
        <div className='col col--4'>
          <div className={styles.benefit__desc__middle}>
            <img src='./img/page/cost.png' className={styles.benefit__img}></img>
            <div className={styles.benefit__desc}>




              <div className={styles.benefit__desc__title}>降低成本</div>
              <div className={styles.benefit__desc__content}>用户可以灵活根据工单组装选择需要服务的类型，最大化节省技术成本。智能推荐根据云上资源运⾏状态智能推荐合理规划，帮助企业合理更合理的配置 IT 基础设施</div>
            </div>
          </div>
        </div>
        <div className='col col--4'>
          <div className={styles.benefit__desc__right}>
            <img src='./img/page/increase.png' className={styles.benefit__img}></img>
            <div className={styles.benefit__desc}>
              <div className={styles.benefit__desc__title}>增值服务</div>
              <div className={styles.benefit__desc__content}>针对企业客户提供个性化定制的服务,提供产品功能以外的特性和功能增强的更新，诸如 KubeGems/PAI、GPU设备⽀持、适配ARM架构、K8S 集群升级、开发&运维培训等</div>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Benefit
