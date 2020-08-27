import React from 'react';
import Head from 'next/head';
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

export default function Layout({ children }: LayoutProps) {
  const [ isDark, toggle ] = useIsDark();
  const [isOpenSidebar, toggleSidebar] = useToggle();
  return (
    <div className={`${isDark ? 'dark' : 'light'} app`}>
      <Head>
        <title>Personal Space of Ahmad Reza</title>
      </Head>
      <nav className={` ${isOpenSidebar ? classes.activeNav : ''} ${classes.nav}`}>
        <ul>
          <li className={classes.selected}><FontAwesomeIcon icon={faHome} size="2x" className={classes.icon} />Home</li>
          <li><FontAwesomeIcon icon={faPencilAlt} size="2x" className={classes.icon} />Blog</li>
          <li><FontAwesomeIcon icon={faPhone} size="2x" className={classes.icon} />Contact</li>
        </ul>
      </nav>
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
