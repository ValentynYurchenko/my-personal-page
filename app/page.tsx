import Link from 'next/link';
import cn from 'classnames';
import styles from './page.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import myphoto from '../layout/icons/15-removebg-preview.png';
import JSIcon from '../layout/icons/icons8-javascript.svg';
import HTMLIcon from '../layout/icons/icons8-html.svg';
import CSSIcon from '../layout/icons/icons8-css.svg';
import ReactIcon from '../layout/icons/icons8-react.svg';
import ReduxIcon from '../layout/icons/icons8-redux.svg';
import NextIcon from '../layout/icons/icons8-nextjs.svg';

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image src={myphoto} alt="photo" />
      </div>
      <div className={styles.textinfo}>
        <h2 className={styles.subtitle}>My name is</h2>
        <h1 className={styles.title}>
          Valentyn Yurchenko and I`m <span>Web Developer</span>
        </h1>
        <div className={styles.text}>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);
