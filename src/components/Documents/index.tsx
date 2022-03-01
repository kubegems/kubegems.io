import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';
import styles from './index.module.scss';

const Documents = (): JSX.Element => {
  const data = [
    {
      key: 'features',
      title: '功能介绍',
      desc: '功能介绍功能介绍功能介绍功能介绍功能介绍功能介绍功能介绍',
      link: '/docs/concepts/feature/mutil-tenant-management',
      img: '/img/pages/features.svg'
    },
    {
      key: 'manual',
      title: '用户手册',
      desc: '用户手册用户手册用户手册用户手册用户手册用户手册用户手册',
      link: '/docs/quick-starts/quick-start',
      img: '/img/pages/manual.svg'
    },
    {
      key: 'contributor',
      title: '成为贡献者',
      desc: '成为贡献者成为贡献者成为贡献者成为贡献者成为贡献者',
      link: '/docs/public/bugs',
      img: '/img/pages/contributor.svg'
    },
  ]

  return (
    <OverPack component='section' id='documents' className={styles.documents}>
      <div className={clsx(styles.documents__content, 'container')}>
        <h2 className={styles.documents__title}>了解KubeGems更多</h2>
        <QueueAnim
          type='bottom'
          className={clsx(styles.documents__wrapper, 'row')}>
          {data.map(item => (
            <div
              key={item.key}
              className={clsx(styles['documents__item-wrapper'], 'col col--4')}
            >
              <div className={styles.documents__item}>
                <div className={styles['documents__item-header']}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link to={item.link} className={styles['documents__item-link']}>
                    查看详情
                    <i className='kubegems-icon icon-arrow-right' />
                  </Link>
                </div>
                
                <div className={styles['documents__item-img']}>

                </div>
              </div>
            </div>
          ))}
        </QueueAnim>
      </div>
    </OverPack>
  )
}

export default Documents
