import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import styles from './index.module.scss';

const Welcome = (): JSX.Element => {
  return (
    <section id='welcome' className={styles.welcome}>
      <div className={clsx(styles.welcome__content, 'container')}>
        <div className='row'>
          <div className='col col--6'>
            <h1 className={styles.welcome__title}>
              <Texty>KubeGems</Texty>
            </h1>
            <div className={styles.welcome__subtitle}>
              <Texty type='bottom' delay={500}>产品标语产品标语产品标语产品标语产品标语产品标语产品标语</Texty>
            </div>
            <div className={styles.welcome__desc}>
              <Texty type='alpha' mode='sync' delay={1000}>产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述</Texty>
            </div>
            <TweenOne
              style={{ opacity: 0, marginBottom: -100 }}
              animation={{ opacity: 1, marginBottom: 0 }}
            >
              <Link
                key='start'
                className={clsx(
                  'button button--primary button--lg',
                  styles.welcome__getstart,
                )}
                to={useBaseUrl('docs/concepts/what-is-kubegems')}>
                了解更多
              </Link>
            </TweenOne>
          </div>
          <div className='col col--6'></div>
        </div>
        <i className={clsx('kubegems-icon icon-scroll', styles.welcome__scroll)} />
      </div>
      
    </section>
  )
}

export default Welcome
