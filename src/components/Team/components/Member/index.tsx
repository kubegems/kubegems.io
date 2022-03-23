import Link from '@docusaurus/Link';
import React from 'react';
import styles from './index.module.scss';

const Member = ({ avatar, name, post }): JSX.Element => {
  return (
    <div className={styles.member}>
      <Link to={avatar.replace('.png', '')}>
        <img src={avatar} alt={name} className={styles.member__avatar} />
      </Link>
      <div>
        <div className={styles.member__name}>{name}</div>
        <div className={styles.member__post}>{post}</div>
      </div>
    </div >
  )
}

export default Member
