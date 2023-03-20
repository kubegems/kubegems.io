import Link from '@docusaurus/Link';
import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

const People = ({ avatar, name, post, intro }): JSX.Element => {
  return (
    <div className={styles.member}>
      <div className={styles.member__intro}> {intro} </div>
      <div className={clsx('row', styles.member__n)}>
        <div className='col col--4'>
          <img src={avatar} alt={name} className={styles.member__avatar} />
        </div>
        <div className='col col--8'>
          <div className={styles.member__p}>
            <Link to={avatar.replace('.png', '')}>
              <div className={styles.member__name}>{name}</div>
            </Link>
            <div className={styles.member__post}>{post}</div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default People
