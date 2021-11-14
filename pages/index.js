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
          <h2 className={styles.subtitle1}>FRONT-END ENGINEER</h2>
          <h1>HORIE RYUHEI</h1>
          <h2 className={styles.subtitle2}>Portfolio</h2>
        </div>
        <section className={styles.top}>
          <p className={styles.discription1}>Thank you for visiting.</p>
          <p className={styles.discription2}>This is the introduction site of Ryuhei Horie.</p>
          <p className={styles.discription3}>You can move to the page of personal information</p>
          <p className={styles.discription4}>and past works from the side bar on the right side.</p>
        </section>
      </section>
      <section className={styles.top2}>
        <p className={styles.discription1}>Thank you for visiting.</p>
        <p className={styles.discription2}>This is the introduction site of Ryuhei Horie.</p>
        <p className={styles.discription3}>You can move to the page of personal information</p>
        <p className={styles.discription4}>and past works from the icon at the top.</p>
      </section>
      <Link href="https://github.com/Horieryuhei0421/horie-portfolio">
        <a target="_blank">
          <div className={styles.sircleObjects} ><GitHub /></div>
        </a>
      </Link>
    </Layout>
  )
}