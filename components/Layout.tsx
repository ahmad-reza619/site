import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPencilAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import { useIsDark } from '../hooks';
import classes from '../styles/Home.module.css';

function useToggle(initVal = false): [boolean, () => void] {
  const [state, setState] = React.useState<boolean>(initVal);

  function toggle(): void {
    setState(s => !s);
  }

  return [state, toggle];
}

interface LayoutProps {
  children: any;
}

function Sidebar({ isOpen }: { isOpen: boolean }) {
  const router = useRouter();
  return (
    <nav className={` ${isOpen ? classes.activeNav : ''} ${classes.nav}`}>
      <ul>
        <Link href="/">
          <li className={router.pathname === '/' ? classes.selected : ''}>
            <FontAwesomeIcon icon={faHome} size="2x" className={classes.icon} />Home
          </li>
        </Link>
        <Link href="/blogs">
          <li className={router.pathname === '/blogs' ? classes.selected : ''}>
            <FontAwesomeIcon icon={faPencilAlt} size="2x" className={classes.icon} />Blog
          </li>
        </Link>
        <li className={router.pathname === '/contact' ? classes.selected : ''}>
          <FontAwesomeIcon icon={faPhone} size="2x" className={classes.icon} />Contact
        </li>
      </ul>
    </nav>
  )
}

export default function Layout({ children }: LayoutProps) {
  const [ isDark, toggle ] = useIsDark();
  const [isOpenSidebar, toggleSidebar] = useToggle();
  return (
    <div className={`${isDark ? 'dark' : 'light'} app`}>
      <Head>
        <title>Personal Space of Ahmad Reza</title>
      </Head>
      <Sidebar
        isOpen={isOpenSidebar}
      />
      <main>
        <div className={classes.darkModeWrapper}>
          <div className={classes.logo}>
            <img src="/owlsvg.png" />
          </div>
          <div className={classes.darkMode} onClick={toggle}>
            <div className={`${classes.darkModeInner} ${isDark ? classes.lightModeInner : ''}`} />
          </div>
        </div>
        {children}
      </main>
      <button
        onClick={toggleSidebar}
        className={`${classes.floatingNavBtn} ${isOpenSidebar ? classes.active: ''}`}>
        <div />
      </button>
    </div>
  );
}
