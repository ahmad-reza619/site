import React from 'react';
import Head from 'next/head';

import classes from '../styles/Home.module.css';
import Text from '../components/Text';
import { useIsDark } from '../hooks';

export default function Home() {
  const [ isDark, toggle ] = useIsDark();
  const [test, setTest] = React.useState(false);

  const toggleSidebar = () => setTest(state => !state);
  return (
    <div className={`${isDark ? 'dark' : 'light'} app`}>
      <Head>
        <title>Personal Space of Ahmad Reza</title>
      </Head>
      <nav className={classes.nav}>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <div className={classes.darkModeWrapper}>
          <div className={classes.darkMode} onClick={toggle}>
            <div className={`${classes.darkModeInner} ${isDark ? classes.lightModeInner : ''}`} />
          </div>
        </div>
        <section className={classes.section}>
          <div className={classes.me}>
            <img src="me.jpg" alt="Ahmad Reza" />
          </div>
        </section>
        <section>
          <h1 className={classes.headline}>
            <Text>
              Ahmad Reza
            </Text>
          </h1>
          <h4 className={classes.subline}>
            <Text>Frontend Software Engineer</Text>
          </h4>
        </section>
        <section>
          <p className={classes.desc}>
            <Text>
              React · Next JS · Gatsby JS · Freetime Open Sourcerer · 19yo
            </Text>
          </p>
        </section>
      </main>
      <button
        onClick={toggleSidebar}
        className={`${classes.floatingNavBtn} ${test ? classes.active: ''}`}>
        <div />
      </button>
    </div>
  );
}
