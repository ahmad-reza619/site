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
  },
  {
    icon: faGithub,
    title: 'github'.toUpperCase(),
    desc: 'I do open souce sometimes, follow me please :)',
  },
  {
    icon: faLinkedin,
    title: 'linkedin'.toUpperCase(),
    desc: 'Wanted to connect with me in linkedin?',
  },
]

export default function Contact(){
  return (
    <Layout>
      <div className={classes.container}>
        <Text as="h1">Contact Me</Text>
        {data.map((d) => (
          <div className={classes.contactLinkCard} key={d.title}>
            <Text className={classes.iconWrapper}>
              <FontAwesomeIcon icon={d.icon} size="6x" className={classes.icon} />
            </Text>
            <div className={classes.contactLinkCardContent}>
              <Text as="h5">{d.title}</Text>
              <Text as="p">
                {d.desc}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
