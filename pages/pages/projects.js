import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'
import styles from '../../styles/main.module.css'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.mainBox}>
      </section>
    </Layout>
  )
}