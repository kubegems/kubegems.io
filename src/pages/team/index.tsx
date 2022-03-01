import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';
import Member from './components/Member';
import styles from './index.module.scss';

const Team = () => {
  const members = [
    {
      id: '1',
      avatar: '/img/pages/avatar.jpg',
      name: '团队成员',
      post: '研发工程师',
      desc: '成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍'
    },
  ]

  return (
    <Layout
      title='KubeGems'
      description='Team'
      pageClassName={styles.team}>
      <main className={clsx('container', styles.team__main)}>
        <h1 className={styles.team__title}>团队成员</h1>
        <QueueAnim
          type='bottom'
          className='row'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <div key={item} className={clsx(styles.team__item, 'col col--4')}>
              <Member {...members[0]} />
            </div>
          ))}
        </QueueAnim>
      </main>
    </Layout>
  )
}

export default Team
