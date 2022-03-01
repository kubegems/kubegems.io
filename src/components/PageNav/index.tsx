import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx';
import { debounce } from '../../utils';
import styles from './index.module.scss';

const PAGE_IDS = [
  'welcome',
  'whykubegems1',
  'whykubegems2',
  'documents',
  'resources',
  'footer'
]

const PageNav = (): JSX.Element => {
  const [page, setPage] = useState(0);
  const index = useRef(0);
  const unmounted = useRef(false);
  const mounted = useRef(false);
  const browserWindow = useRef<any>({ location: {} });

  const scrollTo = () => {
    const id = PAGE_IDS[index.current];
    browserWindow.current.location.hash = `#/${id}`;
    const page = document.getElementById(id);
    document.documentElement.scrollTo({ top: page.offsetTop, behavior: 'smooth' });
  }

  const onDown = () => {
    if (index.current < PAGE_IDS.length - 1) {
      index.current++
      setPage(index.current);
    }
  }

  const onUp = () => {
    if (index.current > 0) {
      index.current--
      setPage(index.current);
    }
  }

  const windowListenMouseWheel = () => {
    const scrollFunc = e => {
      if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
          onUp();
        }
        if (e.wheelDelta < 0) {
          onDown();
        }
      } else if (e.detail) {  // Firefox
        if (e.detail > 0) {
          onUp();
        }
        if (e.detail < 0) {
          onDown();
        }
      }
    }

    const fx = debounce(scrollFunc, 100, true);
    browserWindow.current.addEventListener('mousewheel', fx);
    document.body.classList.add(styles.pagenav__document);
  
    return () => {
      unmounted.current = true;
      browserWindow.current.removeEventListener('mousewheel', fx);
      document.body.classList.remove(styles.pagenav__document);
      browserWindow.current.location.hash = '';
    }
  }

  const setIndexOnHash = () => {
    browserWindow.current.location.hash = browserWindow.current.location.hash || '#/welcome';
    const hash = browserWindow.current.location.hash.replace('#/', '');
    const i = PAGE_IDS.indexOf(hash);
    index.current = i === -1 ? 0 : i;
    setPage(index.current);
  }

  const onClickNav = (i) => {
    index.current = i;
    setPage(index.current);
  }

  useEffect(() => {
    if (mounted.current) {
      scrollTo();
    }
  }, [page]);

  useEffect(() => {
    mounted.current = true;
    browserWindow.current = window;
    const dispose = windowListenMouseWheel();
    return () => dispose();
  }, []);

  useEffect(() => {
    if (!unmounted.current) {
      setIndexOnHash();
    }
  }, [browserWindow.current.location.hash]);

  return (
    <ul className={styles.pagenav}>
      {PAGE_IDS.map((p, i) => (
        <li
          key={p}
          className={clsx({ [styles.pagenav__active]: i === page })}
          onClick={() => onClickNav(i)}
        />
      ))}
    </ul>
  )
}

export default PageNav
