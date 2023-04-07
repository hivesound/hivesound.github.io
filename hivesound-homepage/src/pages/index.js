import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>HIVESOUND</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <span>
              Site under construction&nbsp; Stay tuned for more!
            </span>
          </p>
        </div>
      <div className={styles.logo}>
        <Image
          src="./HIVESOUND_CI_waves.svg"
          alt="Next.js Logo"
          width={1000}
          height={500}
          priority
        />
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
