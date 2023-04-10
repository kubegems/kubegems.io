import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';
import People from './components/People';
import styles from './index.module.scss';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const members = [
    {
      id: '1',
      avatar: 'https://github.com/LinkMaq.png',
      name: 'Link Ma',
      post: 'KubeGems 项目发起人 & 解决方案',
      intro: '负责社区运营。国内⼈⼯智能独⻆兽公司⾼级经理。主导国内某互联⽹上市公司云平台系统研发与运营。',
    },
    {
      id: '2',
      avatar: 'https://github.com/pepesi.png',
      name: 'Deng Yu',
      post: '高级软件工程师 & KubeGems 核心研发',
      intro: '国内某互联⽹上市公司基础架构核⼼研发，主攻MLOps ⽅向和开源推理框架，有丰富的研发经验',
    },
    {
      id: '3',
      avatar: 'https://github.com/chenshunliang.png',
      name: 'Leon Chen',
      post: '高级全栈⼯程师 & KubeGems 前端负责人',
      intro: '国内某互联⽹上市公司基础架构核⼼研发，主攻前端研发和交互设计，VUE 经验丰富',
    },
    {
      id: '4',
      avatar: 'https://github.com/cnfatal.png',
      name: 'Likun Zhang',
      post: '高级软件工程师 & KubeGems 核心研发',
      intro: '国内某云⼚商核⼼研发，主攻 Kubernetes 和云原⽣架构⽅向',
    },
    {
      id: '5',
      avatar: 'https://github.com/jojotong.png',
      name: 'Lintong Sun',
      post: '高级软件工程师 & 云原生可观测性方向 ',
      intro: '国内某云⼚商核⼼研发，主攻分布式应⽤可观测性、API ⽹关和DevOps⽅向',
    },
    {
      id: '6',
      avatar: 'https://github.com/taozix.png',
      name: 'Ruitao Liu',
      post: '高级存储工程师 & 云原生分布式存储方向',
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
      brand: './img/page/brand/cloudminds.png',
    },
    {
      id: '4',
      brand: './img/page/brand/msxf.png',
    },
    {
      id: '6',
      brand: './img/page/brand/zkzh.png',
    },
    {
      id: '7',
      brand: './img/page/brand/jz.png',
    },
    {
      id: '8',
      brand: './img/page/brand/feita.png',
    },
    {
      id: '6',
      brand: './img/page/brand/qax.png',
    },
  ]

  return (
    <section id='team' className={styles.team}>
      <div className='row' style={{ marginBottom: '50px' }}>
        <div className='col col--12'>
          <div className={styles.team__subtitle}>
            <div>团队成员</div>
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

            <Slider {...{
              dots: false,
              infinite: true,
              slidesToShow: 7,
              slidesToScroll: 1,
              autoplay: true,
              arrows: false,
              speed: 2500,
              autoplaySpeed: 10,
              cssEase: "linear"
            }}>
              {brands.map(item => (
                <div key={item.id} className={clsx(styles.team__partner__item, item.id === '1' ? styles.team__partner__item__r : '')}>
                  <img className={clsx(item.id === '3' ? styles.team__partner__item__t : '', styles.team__partner__item__img)} src={item.brand}></img>
                </div>
              ))}
            </Slider>
            {/* <div
              className='row'>
              <div className='col col--1'></div>
              {brands.map(item => (
                <div key={item.id} className={clsx(styles.team__partner__item, item.id === '1' ? styles.team__partner__item__r : '')}>
                  <img src={item.brand}></img>
                </div>
              ))}
              <div className='col col--1'></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
