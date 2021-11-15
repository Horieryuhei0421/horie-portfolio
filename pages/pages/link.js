import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'
import styles from '../../styles/link.module.css'

export default function LinkComponent() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.mainBox}>
        <div className={styles.moreInformationFrame}>
          <section className={styles.moreInformation}>
            <h1 className={styles.title}>LINK</h1>
            <section className={styles.linkBodyFrame}>
              <section>
                <h2 className={styles.subtitle}>堀江龍平のGit hubアカウントへ</h2 >
                <Link href="https://github.com/Horieryuhei0421">
                  <a target="_blank">
                    <p className={styles.githubUrl}>https://github.com/Horieryuhei0421</p>
                  </a>
                </Link>
              </section>
              <hr className={styles.ohr} />
              <section className={styles.forProject}>
                <h2 className={styles.subtitle}>各制作物へ</h2>
                <div>
                  <h3>起業促進アプリ「Promo」へ</h3>
                  <Link href="https://promo-e4daf.firebaseapp.com/">
                    <a target="_blank">
                      <p className={styles.forUrl}>https://promo-e4daf.firebaseapp.com/</p>
                    </a>
                  </Link>
                </div>
                <div>
                  <h3>ファッションECサイト「online shop ネコ」へ</h3>
                  <Link href="https://ec-app-18bad.firebaseapp.com/">
                    <a target="_blank">
                      <p className={styles.forUrl}>https://ec-app-18bad.firebaseapp.com/</p>
                    </a>
                  </Link>
                </div>
                <div>
                  <h3>チャットボットアプリへ</h3>
                  <Link href="https://chatbot-c9496.web.app/">
                    <a target="_blank">
                      <p className={styles.forUrl}>https://chatbot-c9496.web.app/</p>
                    </a>
                  </Link>
                </div>
                <div>
                  <h3>簡易ブログ（Next.js勉強用）へ</h3>
                  <Link href="https://nextjs-blog-sigma-puce.vercel.app/">
                    <a target="_blank">
                      <p className={styles.forUrl}>https://nextjs-blog-sigma-puce.vercel.app/</p>
                    </a>
                  </Link>
                </div>
                <div>
                  <h3>堀江龍平のPortfolioサイト（こちらのサイト）のURL</h3>
                  <Link href="https://horie-portfolio.vercel.app/">
                    <a target="_blank">
                      <p className={styles.forUrl}>https://horie-portfolio.vercel.app/</p>
                    </a>
                  </Link>
                </div>
              </section>
              {/* <hr className={styles.ohr} />
              <section>
                <h2 className={styles.subtitle}>お問い合わせへ</h2>
                <p className={styles.inquiry}>こちらをタップしてお問い合わせ内容をモーダルに記入してください。
                </p>
              </section> */}
            </section>
          </section>

        </div>
      </section>
    </Layout>
  )
}