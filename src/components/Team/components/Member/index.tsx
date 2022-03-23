import React from 'react';
import styles from './index.module.scss';

const Member = ({ avatar, name, post }): JSX.Element => {
  return (
    <div className={styles.member}>
      <img src={avatar} alt={name} className={styles.member__avatar} />
      <div>
        <div className={styles.member__name}>{name}</div>
        <div className={styles.member__post}>{post}</div>
      </div>
    </div>
  )
}

export default Member
