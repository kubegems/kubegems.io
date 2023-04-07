import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';
import People from './components/People';
import styles from './index.module.scss';

const Team = () => {
  const members = [
    // {
    //   id: '1',
    //   avatar: 'https://github.com/KinglyWayne.png',
    //   name: '王伟 (Wayne Wang)',
    //   post: '⾸席解决⽅案架构师',
    //   intro: '国内⼈⼯智能独⻆兽公司⾼级技术总监。《Kubernetes 权威指南》、《企业级容器云架构实战开发指南》作者之⼀',
    // },
    {
      id: '2',
      avatar: 'https://github.com/LinkMaq.png',
      name: 'Link Ma',
      post: 'KubeGems 项⽬发起⼈，项⽬&产品经理',
      intro: '负责社区运营。国内⼈⼯智能独⻆兽公司⾼级经理。主导国内某互联⽹上市公司云平台系统研发与运营。',
    },
    {
      id: '3',
      avatar: 'https://github.com/pepesi.png',
      name: 'Deng Yu',
      post: 'KubeGems 核⼼研发',
      intro: '国内某互联⽹上市公司基础架构核⼼研发，主攻MLOps ⽅向和开源推理框架，有丰富的研发经验',
    },
    {
      id: '4',
      avatar: 'https://github.com/chenshunliang.png',
      name: 'Leon Chen',
      post: 'KubeGems 全栈⼯程师',
      intro: '国内某互联⽹上市公司基础架构核⼼研发，主攻前端研发和交互设计，VUE 经验丰富',
    },
    {
      id: '5',
      avatar: 'https://github.com/cnfatal.png',
      name: 'Likun Zhang',
      post: 'Golang ⾼级研发',
      intro: '国内某云⼚商核⼼研发，主攻 Kubernetes 和云原⽣架构⽅向',
    },
    {
      id: '6',
      avatar: 'https://github.com/jojotong.png',
      name: 'Lintong Sun',
      post: 'Golang⾼级研发',
      intro: '国内某云⼚商核⼼研发，主攻分布式应⽤可观测性、API ⽹关和DevOps⽅向',
    },
    {
      id: '7',
      avatar: 'https://github.com/taozix.png',
      name: 'Ruitao Liu',
      post: '⾼级存储研发⼯程师',
      intro: '主攻 Ceph 分布式存储和对象存储⽅向',
    },
  ]

  const brands = [
    {
      id: '1',
      brand: './img/page/brand/earthquake.png',
    },
    {
      id: '2',
      brand: './img/page/brand/hpe.png',
    },
    {
      id: '3',
      brand: './img/page/brand/msxf.png',
    },
    {
      id: '4',
      brand: './img/page/brand/qax.png',
    },
    {
      id: '5',
      brand: './img/page/brand/zkzh.png',
    },
    {
      id: '6',
      brand: './img/page/brand/jz.png',
    },
    {
      id: '7',
      brand: './img/page/brand/feita.png',
    },
  ]

  return (
    <section id='team' className={styles.team}>
      <div className='row' style={{ marginBottom: '50px' }}>
        <div className='col col--12'>
          <div className={styles.team__subtitle}>
            <div>核心团队</div>
          </div>
        </div>
      </div>
      <QueueAnim
        type='bottom'
        className='row' style={{ marginLeft: '5%', marginRight: '5%' }} >
        {members.map(item => (
          <div key={item.id} className={clsx(styles.team__item, 'col col--3')}>
            <People {...item} />
          </div>
        ))}
      </QueueAnim>

      <div className='row'>
        <div className='col col--12'>
          <div className={styles.team__partner}>
            <div style={{ marginBottom: '60px' }}>用户案例</div>
            <div
              className='row'>
              <div className='col col--1'></div>
              {brands.map(item => (
                <div key={item.id} className={clsx(styles.team__partner__item, item.id === '1' ? styles.team__partner__item__r : '')}>
                  <img src={item.brand}></img>
                </div>
              ))}
              <div className='col col--1'></div>
              <div className='col col--1'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
