import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPencilAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import classes from '../styles/Home.module.css';

interface SidebarProps {
  isOpen: boolean
}

export default function Sidebar({ isOpen }: SidebarProps) {
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
