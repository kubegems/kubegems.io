import React from 'react'
import Link from '@docusaurus/Link';
import styles from './index.module.scss';

const ResourceItem = ({ data }): JSX.Element => {
  const { name, img, desc, href } = data
  return (
    <div className={styles.item}>
      <h3 className={styles.item__name}>{name}</h3>
      <div className={styles.item__main}>
        <img className={styles.item__img} src={img} alt={name} />
        <div className={styles.item__content}>{desc}</div>
      </div>
      <Link to={href} className={styles.item__href}>
        查看详情
        <i className='kubegems-icon icon-arrow-right' />
      </Link>
    </div>
  )
}

export default ResourceItem
