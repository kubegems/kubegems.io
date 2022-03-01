import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Welcome from '../components/Welcome'
import WhyKubeGems1 from '../components/WhyKubeGems1';
import WhyKubeGems2 from '../components/WhyKubeGems2';
import Documents from '../components/Documents';
import Resources from '../components/Resources';
import PageNav from '../components/PageNav';
import styles from './index.module.scss';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      pageClassName={styles.kubegems}>

      <main className={styles.kubegems__main}>
        <div className={styles.kubegems__pages}>
          <Welcome />
          <WhyKubeGems1 />
          <WhyKubeGems2 />
          <Documents />
          <Resources />
        </div>

        <div className={styles.kubegems__bg}>
          <div className={styles['kubegems__bg-arc1']}></div>
          <div className={styles['kubegems__bg-arc2']}></div>
          <div className={styles['kubegems__bg-arc3']}></div>
        </div>
      </main>
      <PageNav />
    </Layout>
  );
}
