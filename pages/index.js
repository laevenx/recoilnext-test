import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {books} from '../store/atoms'
import {useRecoilState, RecoilRoot} from 'recoil'
import {Button} from 'antd'
import Link from 'next/link'

// import { useRouter } from 'next/router'

export default function Home() {

  const [bookData,setBookData] =  useRecoilState(books)

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {JSON.stringify(bookData)}
        <Button><Link href="/create">Create Book</Link></Button>
         
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
