import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPencilAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import Text from '../components/Text';
import { useIsDark } from '../hooks'
import classes from '../styles/Home.module.css';

interface SidebarProps {
  isOpen: boolean
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const router = useRouter();
  const [isDark] = useIsDark();

  const classLiSelected = isDark ? classes.selected : classes.selectedLight;
  return (
    <nav className={` ${isOpen ? classes.activeNav : ''} ${isDark ? 'dark' : 'light'} ${classes.nav}`}>
      <ul>
        <Link href="/">
          <Text as="li" className={router.pathname === '/' ? classLiSelected : ''}>
            <FontAwesomeIcon icon={faHome} size="2x" className={classes.icon} />Home
          </Text>
        </Link>
        <Link href="/blogs">
          <Text as="li" className={router.pathname === '/blogs' ? classLiSelected : ''}>
            <FontAwesomeIcon icon={faPencilAlt} size="2x" className={classes.icon} />Blog
          </Text>
        </Link>
        <Text as="li" className={router.pathname === '/contact' ? classLiSelected : ''}>
          <FontAwesomeIcon icon={faPhone} size="2x" className={classes.icon} />Contact
        </Text>
      </ul>
    </nav>
  )
}
