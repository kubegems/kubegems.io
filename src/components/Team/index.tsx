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
      avatar: 'https://github.com/KinglyWayne.png',
      name: 'Wayne Wang',
      post: '云架构师',
    },
    {
      id: '2',
      avatar: 'https://github.com/LinkMaq.png',
      name: 'Link Ma',
      post: '项目负责人/产品经理',
    },
    {
      id: '3',
      avatar: 'https://github.com/pepesi.png',
      name: 'Deng Yu',
      post: '高级云研发工程师（后端）',
    },
    {
      id: '4',
      avatar: 'https://github.com/chenshunliang.png',
      name: 'Leon Chen',
      post: '高级云研发工程师（前端）',
    },
    {
      id: '5',
      avatar: 'https://github.com/cnfatal.png',
      name: 'Likun Zhang',
      post: '高级云研发工程师（后端）',
    },
    {
      id: '6',
      avatar: 'https://github.com/jojotong.png',
      name: 'Lintong Sun',
      post: '云研发工程师（后端）',
    },
    {
      id: '7',
      avatar: 'https://github.com/kubegems.png',
      name: 'Ruitao Liu',
      post: '云研发工程师（存储）',
    },
    {
      id: '8',
      avatar: 'https://github.com/zhanghe9702.png',
      name: 'He Zhang',
      post: '云研发工程师（后端）',
    },
  ]

  return (
    <QueueAnim
      type='bottom'
      className='row'>
      {members.map(item => (
        <div key={item.id} className={clsx(styles.team__item, 'col col--3')}>
          <Member {...item} />
        </div>
      ))}
    </QueueAnim>
  )
}

export default Team
