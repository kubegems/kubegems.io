import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';
import Member from './components/Member';
import styles from './index.module.scss';

const Team = () => {
  const members = [
    {
      name: "chenshunliang",
      avatar: 'https://github.com/chenshunliang.png',
      desc: '介绍',
      post: "developer",
      url: "https://github.com/chenshunliang"
    },
    {
      name: "jwSmlion",
      avatar: 'https://github.com/jwSmlion.png',
      desc: '介绍',
      post: "developer",
      url: "https://github.com/jwSmlion"
    },
    {
      name: "jojotong",
      avatar: 'https://github.com/jojotong.png',
      desc: '介绍',
      post: "developer",
      url: "https://github.com/jojotong"
    },
    {
      name: "linkMq",
      avatar: 'https://github.com/LinkMaq.png',
      desc: '介绍',
      post: "manager",
      url: "https://github.com/LinkMaq"
    },
    {
      name: "zhanghe",
      avatar: 'https://github.com/zhanghe9702.png',
      desc: '介绍',
      post: "developer",
      url: "https://github.com/zhanghe9702"
    },
    {
      name: "yud",
      avatar: 'https://github.com/pepesi.png',
      desc: '介绍',
      post: "developer",
      url: "https://github.com/pepesi"
    },
    {
      name: "cnfatal",
      avatar: 'https://github.com/cnfatal.png',
      desc: '介绍',
      post: "developer",
      url: "https://github.com/cnfatal"
    },
  ]

  return (
    <Layout
      title='KubeGems'
      description='Team'
      pageClassName={styles.team}>
      <main className={clsx('container', styles.team__main)}>
        <h1 className={styles.team__title}> 团队 </h1>
        <QueueAnim
          type='bottom'
          className='row'>
          {members.map(item => (
            <div className={clsx(styles.team__item, 'col col--4')}>
              <Member {...item} />
            </div>
          ))}
        </QueueAnim>
      </main>
    </Layout>
  )
}

export default Team
