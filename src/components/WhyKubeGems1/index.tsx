import React from 'react';
import clsx from 'clsx';
import { Player } from 'video-react';
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';
import styles from './index.module.scss';
import 'video-react/dist/video-react.css';

const WhyKubeGems1 = (): JSX.Element => {
  const desc = [
    {
      key: 'install',
      img: '/img/pages/install.png',
      title: '便捷安装',
      content: '提供installer，一键安装',
    },
    {
      key: 'cloud',
      img: '/img/pages/cloud.png',
      title: '多云管理',
      content: '支持自建k8s和公有云，多云混部',
    },
    {
      key: 'governance',
      img: '/img/pages/governance.png',
      title: '服务治理',
      content: '基于istio的服务治理',
    },
    {
      key: 'ai',
      img: '/img/pages/ai.png',
      title: '服务AI',
      content: '模型管理',
    },
  ]

  return (
    <OverPack component='section' id='whykubegems1' className={styles.whykubegems1}>
      <div className='container'>
        <div className='row'>
          <div className={clsx(styles.whykubegems1__intro, 'col col--7')}>
            <h1 className={styles.whykubegems1__title}>为Kubernetes而生的混合云平台管理</h1>
            <QueueAnim type='left' interval={250} className='row' style={{ height: 520 }}>
              {desc.map(item => (
                <div className='col col--6' key={item.key}>
                  <div className={styles.whykubegems1__item}>
                    <img src={item.img} alt="" className={styles.whykubegems1__img} />
                    <div>
                      <h3 className={styles.whykubegems1__subtitle}>{ item.title }</h3>
                      <p className={styles.whykubegems1__text}>{ item.content }</p>
                    </div>
                  </div>
                </div>
              ))}
            </QueueAnim>
          </div>
          <div className={clsx(styles.whykubegems1__player, 'col col--5')}>
            <Player>
              <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
            </Player>
          </div>
        </div>
      </div>
    </OverPack>
  )
}

export default WhyKubeGems1
