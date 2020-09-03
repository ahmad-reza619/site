import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from '../components/Text';
import Sidebar from './Sidebar';
import { useIsDark, useToggle } from '../hooks';
import classes from '../styles/Home.module.css';

interface LayoutProps {
  children: any;
  title?: string;
}

function DesktopNav() {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <Link href="/">
          <Text as="li" style={{ cursor: 'pointer' }}>
            {router.pathname === '/' && '/'}
            Home
          </Text>
        </Link>
        <Link href="/blogs">
          <Text as="li" style={{ cursor: 'pointer' }}>
            {router.pathname === '/blogs' && '/'}
            Blogs
          </Text>
        </Link>
        <Link href="/contact">
          <Text as="li" style={{ cursor: 'pointer' }}>
            {router.pathname === '/contact' && '/'}
            Contact
          </Text>
        </Link>
      </ul>
    </nav>
  );
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
          <Link href="/">
            <div className={classes.logo}>
              <img src="/owlsvg.png" />
            </div>
          </Link>
          <div className={classes.desktopNav}>
            <DesktopNav />
            <div className={classes.darkMode} onClick={toggle}>
              <div className={`${classes.darkModeInner} ${isDark ? classes.lightModeInner : ''}`} />
            </div>
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
