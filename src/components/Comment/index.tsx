import React, { useState } from 'react';
import styles from './index.module.scss';
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';
import clsx from 'clsx';

const Comment = (props) => {
  const data = [
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


  const [current, setCurrent] = useState(0)

  const onLeft = () => {
    if (current === 0) return
    setCurrent(current - 1)
  }

  const onRight = () => {
    if (current === data.length - 1) return
    setCurrent(current + 1)
  }

  const onJump = (i) => {
    setCurrent(i)
  }

  const bannerStyle = {
    width: `${100 * data.length}%`,
    transform: `translateX(-${100 / data.length * current}%)`
  }

  const itemStyle = {
    width: `${100 / data.length}%`
  }

  return (
    <section id='comment' className={styles.comment}>
      <div className='row' style={{ marginBottom: '50px' }}>
        <div className='col col--12'>
          <div className={styles.comment__title}>
            <div>用户评论</div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__viewbox}>
          <ul className={styles.banner} style={bannerStyle}>
            {data.map(item => (
              <div
                key={item.key}
                className={styles.banner__item}
                style={itemStyle}
              >
                <div className='row'>
                  <div className='col col--6'>
                    <div className={styles.banner__item__avatar}>
                      <img src="https://github.com/taozix.png" />
                    </div>
                    <div>User One</div>
                  </div>
                  <div className='col col--6'>
                    djjdajskjkdjaskdjaskdasdnasjkcx
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div>
          <i
            className={clsx(
              'kubegems-icon icon-arrow-left',
              styles.banner__icon,
              styles['banner__icon--left'],
              { [styles['banner__icon--disabled']]: current === 0 }
            )}
            onClick={onLeft}
          />
          <i
            className={clsx(
              'kubegems-icon icon-arrow-right',
              styles.banner__icon,
              styles['banner__icon--right'],
              { [styles['banner__icon--disabled']]: current === data.length - 1 }
            )}
            onClick={onRight}
          />
        </div>
      </div>

    </section >
  )
}

export default Comment


