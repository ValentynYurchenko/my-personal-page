import Link from 'next/link';
import styles from './page.module.css';
import { withLayout } from '@/layout/Layout';

function About() {
  return (
    <div className={styles.main}>
      <Link href="/about">About</Link>
      <Link href="/">home</Link>
    </div>
  );
}

export default withLayout(About);
