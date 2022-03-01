import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Carousel3d from './components/Carousel3d';
import ResourceItem from './components/ResourceItem';
import styles from './index.module.scss';

const Resources = (): JSX.Element => {
  const data = [
    {
      id: '1',
      name: '负载均衡器',
      img: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
      href: '/',
      desc: '一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍',
    },
    {
      id: '2',
      name: '负载均衡器',
      img: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
      href: '/',
      desc: '一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍',
    },
    {
      id: '3',
      name: '负载均衡器',
      img: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
      href: '/',
      desc: '一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍一些功能介绍',
    }
  ]

  return (
    <section id='resources' className={styles.resources}>
      <div className={clsx(styles.resources__content, 'container')}>
        <h1 className={styles.resources__title}>其他产品</h1>
        <Carousel3d className={styles.resources__carousel}>
          {data.map(item => (
            <ResourceItem key={item.id} data={item} />
          ))}
        </Carousel3d>
      </div>
    </section>
  )
}

export default Resources
