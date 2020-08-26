import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPencilAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      <nav className={` ${test ? classes.activeNav : ''} ${classes.nav}`}>
        <ul>
          <li className={classes.selected}><FontAwesomeIcon icon={faHome} size="2x" className={classes.icon} />Home</li>
          <li><FontAwesomeIcon icon={faPencilAlt} size="2x" className={classes.icon} />Blog</li>
          <li><FontAwesomeIcon icon={faPhone} size="2x" className={classes.icon} />Contact</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <div className={classes.darkModeWrapper}>
          <div className={classes.logo}>
            <img src="/owlsvg.png" />
          </div>
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
        <section className={classes.social}>
          <div className={classes.socialInner}>
            <Text>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Text>
            <Text>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Text>
            <Text>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Text>
          </div>
        </section>
        <section className={classes.other}>
          <div className={classes.fieldset}>
            <label className={`${classes.legend} ${isDark ? 'dark' : '' }`}><Text><small>Latest Blog Post</small></Text></label>
            <div>
              <Text>How To become ugly bastard</Text>
            </div>
          </div>
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
