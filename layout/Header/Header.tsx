import cn from 'classnames';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Link from 'next/link';
import JSIcon from '../icons/icons8-javascript.svg';
import HTMLIcon from '../icons/icons8-html.svg';
import CSSIcon from '../icons/icons8-css.svg';
import ReactIcon from '../icons/icons8-react.svg';
import ReduxIcon from '../icons/icons8-redux.svg';
import NextIcon from '../icons/icons8-nextjs.svg';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.leftpartnav}>
            <h2>WEBDEVELOPER</h2>
            <HTMLIcon className={styles.leftpartnavicons} />
            <CSSIcon className={styles.leftpartnavicons} />
            <JSIcon className={styles.leftpartnavicons} />
            <ReactIcon
              className={cn(styles.leftpartnavicons, styles.circleIcon)}
            />
            <ReduxIcon
              className={cn(styles.leftpartnavicons, styles.circleIcon)}
            />
            <NextIcon
              className={cn(styles.leftpartnavicons, styles.circleIcon)}
            />
          </div>
          <div className={styles.insidenav}>
            <Link href="/">Home</Link>
            <Link href="/about">About me</Link>
            <Link href="/contacts">Contacts</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
