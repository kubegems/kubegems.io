import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

const WhyKubeGems2 = (): JSX.Element => {
  const data = [
    {
      key: 'local',
      title: '本地',
      img: '/img/pages/demo.png'
    },
    {
      key: 'data',
      title: '数据中心',
      img: '/img/pages/demo.png'
    },
    {
      key: 'cloud',
      title: '公有云',
      img: '/img/pages/demo.png'
    },
    {
      key: 'edge',
      title: '边缘',
      img: '/img/pages/demo.png'
    }
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
    <section id='whykubegems2' className={styles.whykubegems2}>
      <div className={clsx(styles.whykubegems2__content)}>
        <h1 className={styles.whykubegems2__title}>运行在任何地方，始终如一为您的服务保驾护航</h1>

        {/* banner */}
        <div className={styles.banner__wrapper}>
          <div className={styles.banner__viewbox}>
            <ul className={styles.banner} style={bannerStyle}>
              {data.map(item => (
                <li
                  key={item.key}
                  className={styles.banner__item}
                  style={itemStyle}
                >
                  <img src={item.img} alt={item.title} />
                </li>
              ))}
            </ul>
          </div>
          
          
          <ul className={styles.banner__indicator}>
            {data.map((item, index) => (
              <li
                key={item.key}
                className={clsx({ [styles['banner__indicator--active']]: index === current })}
                onClick={() => onJump(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>

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
        {/* banner */}

      </div>
    </section>
  )
}

export default WhyKubeGems2
