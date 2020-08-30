import React from 'react';
import Head from 'next/head';

import Sidebar from './Sidebar';
import { useIsDark, useToggle } from '../hooks';
import classes from '../styles/Home.module.css';

interface LayoutProps {
  children: any;
  title: string;
}

export default function Layout({
  children,
  title='Personal Space of Ahmad Reza',
}: LayoutProps) {

  const [ isDark, toggle ] = useIsDark();
  const [isOpenSidebar, toggleSidebar] = useToggle();

  return (
    <div className={`${isDark ? 'dark' : 'light'} app`}>
      <Head>
        <title>{title}</title>
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
