import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/CSR.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function CSR() {

  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch('https://63f6dce3ab76703b15c5b0b8.mockapi.io/api/v1/articles');
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>CSR</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>Client-side Rendered (CSR)</h1>
        </div>
        {state.map((e, i) => (
          <h3 className={inter.className} key={e.id}>Article {i + 1}: {e.title}</h3>
        ))}
      </main>
    </>
  )
}