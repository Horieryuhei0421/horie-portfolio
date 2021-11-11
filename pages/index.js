import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/Header/Header'
import styles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.mainBox}>
        <Link href="/posts/first-post">
          <a>go to first</a>
        </Link>
      </section>
    </Layout>
  )
}