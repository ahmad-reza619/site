import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import fs from 'fs';

import classes from '../styles/Home.module.css';
import Text from '../components/Text';
import Layout from '../components/Layout';
import { useIsDark } from '../hooks';

export default function Home({ newestBlog }) {
  const [ isDark ] = useIsDark();
  return (
    <Layout>
      <section className={classes.section}>
        <div className={classes.me}>
          <img src="me.jpg" alt="Ahmad Reza" />
        </div>
      </section>
      <section>
        <Text as="h1" className={classes.headline}>
          Ahmad Reza
        </Text>
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
            <a href="https://twitter.com/HungryDev1" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </Text>
          <Text>
            <a href="https://github.com/ahmad-reza619" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </Text>
          <Text>
            <a href="https://www.linkedin.com/in/ahmad-reza-68ab52170/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </Text>
        </div>
      </section>
      <section className={classes.other}>
        <div className={classes.fieldset} style={{ border: isDark ? '2px solid white' : '2px solid black' }}>
          <label className={`${classes.legend} ${isDark ? 'dark' : 'light' }`}><Text><small>Latest Blog Post</small></Text></label>
          <div>
            <Text>{newestBlog}</Text>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs
    .readdirSync(`${process.cwd()}/contents/blog`)
  const lastDir = files[files.length - 1]; 
  return {
    props: {
      newestBlog: lastDir.toString(),
    },
  };
}
