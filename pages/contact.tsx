import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import classes from '../styles/Contact.module.css';
import Layout from '../components/Layout';
import Text from '../components/Text';

const data = [
  {
    icon: faTwitter,
    title: 'twitter'.toUpperCase(),
    desc: 'I usually tweet or retweet about tech here',
    links: 'https://twitter.com/HungryDev1',
  },
  {
    icon: faGithub,
    title: 'github'.toUpperCase(),
    desc: 'I do open souce sometimes, follow me please :)',
    links: 'https://github.com/ahmad-reza619',
  },
  {
    icon: faLinkedin,
    title: 'linkedin'.toUpperCase(),
    desc: 'Wanted to connect with me in linkedin?',
    links: 'https://www.linkedin.com/in/ahmad-reza-68ab52170/',
  },
]

export default function Contact(){
  return (
    <Layout>
      <div className={classes.container}>
        <Text as="h1">Contact Me</Text>
        <div className={classes.contactLinks}>
          {data.map((d) => (
            <React.Fragment>
              <Text>
                <FontAwesomeIcon icon={d.icon} size="6x" />
              </Text>
              <a href={d.links} className={classes.contactLinkCardContent}>
                <Text as="h5">{d.title}</Text>
                <Text as="p">
                  {d.desc}
                </Text>
              </a>
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </Layout>
  )
}
