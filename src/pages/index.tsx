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
import Comment from '../components/Comment'
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
          {/* <Comment /> */}
          <Member />
        </div>
      </main>
      {/* <PageNav /> */}
      <Play ref={playRef} />
    </Layout >
  );
}
