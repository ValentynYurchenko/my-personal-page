import Link from 'next/link';
import styles from './page.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import myphoto from '../layout/icons/15-removebg-preview.png';

function Home() {
  return (
    <div className={styles.main}>
      <Image src={myphoto} alt="photo" />
      <h2>
        I`m <span>Valentyn Yurchenko</span> <br />
        JAVASCRIPT DEVELOPER
      </h2>
    </div>
  );
}

export default withLayout(Home);
