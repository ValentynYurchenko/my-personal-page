import Link from 'next/link';
import styles from './page.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import photo from '../layout/photo.png';

function Home() {
  return <div className={styles.main}></div>;
}

export default withLayout(Home);
