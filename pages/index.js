import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import Header from '../components/Header/Header'
import styles from '../styles/main.module.css'
import { GitHub } from "@material-ui/icons";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.mainBox}>
        <div className={styles.topUp}>
          <h2>FRONT=END ENGINEER</h2>
          <h1>HORIE RYUHEI</h1>
          <h2>Portfolio</h2>
        </div>
        <section className={styles.top}>
          <p>Thank you for visiting.</p>
          <p>This is the introduction site of Ryuhei Horie.</p>
          <p>You can move to the page of personal information</p>
          <p>and past works from the side bar on the right side.</p>
        </section>
        <Link href="/pages/profile">
          <a>go profile</a>
        </Link>
      </section>
      <section className={styles.top2}>
        <p>Thank you for visiting.</p>
        <p>This is the introduction site of Ryuhei Horie.</p>
        <p>You can move to the page of personal information</p>
        <p>and past works from the icon at the top.</p>
      </section>
      <div className={styles.sircleObjects}><GitHub /></div>
    </Layout>
  )
}