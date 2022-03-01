import React from 'react';
import styles from './index.module.scss';

const Member = ({ avatar, name, post, desc }): JSX.Element => {
  return (
    <div className={styles.member}>
      <img src={avatar} alt={name} className={styles.member__avatar} />
      <div className={styles.member__intro}>
        <div className={styles.member__name}>{name}</div>
        <div className={styles.member__post}>{post}</div>
        <div className={styles.member__desc}>{desc}</div>
      </div>
    </div>
  )
}

export default Member
