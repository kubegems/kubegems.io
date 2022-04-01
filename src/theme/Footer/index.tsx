import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Footer = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  const footer = siteConfig.themeConfig.footer as any
  const copyright = footer?.copyright || `Copyright © ${new Date().getFullYear()} kubegems.io .`

  return (
    <footer className='footer' id='footer'>
      <div className='text--center'>{copyright}</div>
    </footer>
  )
}

export default Footer
