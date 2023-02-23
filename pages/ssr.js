import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/SSR.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function SSR({ state }) {
  return (
    <>
      <Head>
        <title>SSR</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>Server-side Rendered (SSR)</h1>
        </div>
        {state.map((e, i) => (
          <h3 className={inter.className} key={e.id}>Article {i + 1}: {e.title}</h3>
        ))}
      </main>
    </>
  )
}

export async function getServerSideProps() {

  const res = await fetch('https://63f6dce3ab76703b15c5b0b8.mockapi.io/api/v1/articles');
  const state = await res.json();

  return {
    props: {
      state,
    },
  };

}