import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
        <div className={styles.profileUpper}>
          <div className={styles.borderCircle}>
            <Image
              priority
              src="/images/horie.jpg"
              height={170}
              width={280}
              className={styles.borderCircleIn}
              alt={"horie's pocture"}
            />
          </div>
          <section className={styles.profileFrame}>
            <p>氏名：</p>
            <p>堀江龍平</p>
            <p>生年月日：</p>
            <p>1998年04月21日</p>
            <p>出身地：</p>
            <p>埼玉県</p>
            <p>出身校：</p>
            <p>埼玉県立松山高等学校 卒業</p>
            <p></p>
            <p>東洋大学情報連携学部情報連携学科 卒業予定</p>
            <p>実務経験：</p>
            <p>フロントエンジニアとして約6ヶ月</p>
            <p>スキル：</p>
            <p>JavaScriptなど（詳しくは下部に記載）</p>
          </section>

        </div>

        <Link href="/posts/first-post">
          <a>go to first</a>
        </Link>
        <div>二行目にならんのかね</div>
      </section>
    </Layout>
  )
}