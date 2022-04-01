import Link from '@docusaurus/Link';
import React from 'react';
import styles from './index.module.scss';

const Member = ({ avatar, name }): JSX.Element => {
  return (
    <div className={styles.member}>
      <img src={avatar} alt={name} className={styles.member__avatar} />
      <div>
        <Link to={avatar.replace('.png', '')}>
          <div className={styles.member__name}>{name}</div>
        </Link>
      </div>
    </div >
  )
}

export default Member
