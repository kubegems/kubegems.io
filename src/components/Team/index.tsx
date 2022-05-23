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
      post: 'Principal Solutions Engineer',
    },
    {
      id: '2',
      avatar: 'https://github.com/LinkMaq.png',
      name: 'Link Ma',
      post: 'PM / Software Engineer',
    },
    {
      id: '3',
      avatar: 'https://github.com/pepesi.png',
      name: 'Deng Yu',
      post: 'Software Engineer',
    },
    {
      id: '4',
      avatar: 'https://github.com/chenshunliang.png',
      name: 'Leon Chen',
      post: 'Frontend Developer',
    },
    {
      id: '5',
      avatar: 'https://github.com/cnfatal.png',
      name: 'Likun Zhang',
      post: 'Software Engineer',
    },
    {
      id: '6',
      avatar: 'https://github.com/jojotong.png',
      name: 'Lintong Sun',
      post: 'Software Engineer',
    },
    {
      id: '7',
      avatar: 'https://github.com/taozix.png',
      name: 'Ruitao Liu',
      post: 'Software Engineer',
    },
    {
      id: '8',
      avatar: 'https://github.com/zhanghe9702.png',
      name: 'He Zhang',
      post: 'Software Engineer',
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
