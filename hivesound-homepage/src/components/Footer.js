import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function Footer () {
  return (
    <div className={styles.footer}>
        <div>
            <Link href="/imprint">
               Imprint
            </Link>
        </div>
        <div className={styles.companyFooter}>
            <p>&copy; HIVESOUND {new Date().getFullYear()}</p>
        </div>
    </div>
  );
};
