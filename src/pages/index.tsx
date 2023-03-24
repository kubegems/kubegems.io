/*
 * @Author: leon.chen imchensl@163.com
 * @Date: 2023-03-16 13:40:38
 * @LastEditors: leon.chen imchensl@163.com
 * @LastEditTime: 2023-03-24 16:28:34
 * @FilePath: /kubegems.io/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Play from '../components/Play'
import PageNav from '../components/PageNav';
import HomePage from '../components/Home'
import CloudNative from '../components/CloudNative'
import AI from '../components/AI'
import Benefit from '../components/Benefit'
import Member from '../components/Member'
import styles from './index.module.scss';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const playRef = useRef();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      pageClassName={styles.kubegems}>

      <main className={styles.kubegems__main}>
        <div className={styles.kubegems__pages}>
          <HomePage handleShowPlay={() => { playRef.current.handleShow() }} />
          <CloudNative />
          <AI />
          <Benefit />
          <Member />
        </div>
      </main>
      {/* <PageNav /> */}
      <Play ref={playRef} />
    </Layout >
  );
}
