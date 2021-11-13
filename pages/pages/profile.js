import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'
// import Header from '../components/Header/Header'
import styles from '../../styles/main.module.css'

export default function FirstPost() {
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
              width={300}
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
        <h2 className={styles.informationTitle}>More information</h2>
        <div className={styles.moreInformation}>
          <section className={styles.informationFrame}>
            <div>
              <p>実務経験</p>
              <p>株式会社ホロックスで６ヶ月フロントエンドエンジニアとして業務させ
                ていただいてました。(使用技術はJavaScript, React.js, Redux, html, css, tailwid-css, Git)</p>
              <hr className={styles.ohr} />
            </div>
            <div>
              <p>使用言語・技術</p>
              <p>JavaScript, TypeScript, React.js, Redux, Next.js, Material-UI,html, css, tailwid-css, Firebase, Versel, Git</p>
              <hr className={styles.ohr} />
            </div>
            <div>
              <p>経歴</p>
              <p>大学２年４月ごろから本格的にプログラミング学習を始め、html, css,
                JavaScriptの学習をし、ローカル環境でサイトを制作しエンジニアに興味を持ち始め、同学部内の友人の誘いで2年の2月「株式会社ホロックス」に入社。チーム開発や流行の技術など知識・経験を実務で得ることができ退社後の現在はモダンJSに興味を持ち「Rect.js」「Firebase」等を用いてWebアプリ開発を行なっています。</p>
              <hr className={styles.ohr} />
            </div>
            <div>
              <p>自己PR</p>
              <p>経歴は長くはないですが、一人でsign upやトランザクション処理などの
                汎用的に使われる機能を備えたWebアプリをデプロイするまでの技術があります。また制作物では「Next.js」,「TypeScript」などの新しい技術も積極的に用いているので新しいものを学ぶ向上心も見ていただきたいと思います。</p>
              <hr className={styles.ohr} />
            </div>

          </section>
        </div>
        <Link href="/">
          <a>go to first</a>
        </Link>
      </section>
    </Layout>
  )
}