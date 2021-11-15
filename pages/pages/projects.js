import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.mainBox}>
        <h1>PROJECTS</h1>
        <div className={styles.titleBottom}>
          <p>個人制作、チーム制作、実務で制作したサービスの説明を記載しております。
          </p>
          <p>他に制作したサービスはGit hubに投稿されています。

          </p>
          <p>Git hubアカウントを新しくしたため制作物やcontributionsは一部になります。
          </p>
        </div>
        <section>
          <section className={styles.projectFrame}>
            <div className={styles.projectFrameSet}>
              <video src="/video/promoVideo.mp4" controls className={styles.videoFrame}></video>
              <p className={styles.forApply}>こちらからアプリへ移動できます。</p>
            </div>
            <div className={styles.projectDiscription}>
              <div>
                <h2>サービス名</h2>
                <p>・Promo(プロモ)</p>
              </div>
              <div>
                <h2>概要</h2>
                <p>・Webアプリ</p>
                <p>・企業に関する知識や資金を募ることができるプラ
                  ットフォームアプリ。知識はオンラインフリーマー
                  ケット型。資金はクラウドファンディング型で募る
                  ことができる。</p>
              </div>
              <div>
                <h2>機能</h2>
                <p>・Sign up, Sign in, Sign out, Password Reset,
                  プロフィール設定, 案件投稿, 案件削除, 購入時のトランザクシ
                  ョン処理, チェックリスト, アプリ内通知など</p>
              </div>
              <div>
                <h2>制作期間</h2>
                <p>・約１ヶ月＋現在進行中（追加機能制作）</p>
              </div>
              <div>
                <h2>制作人数</h2>
                <p>・２人</p>
              </div>
              <div>
                <h2>担当</h2>
                <p>・全デザイン、オンラインフリーマーケット全担当。
                  （クラウドファンディングの実装はもう一人の担当）
                </p>
              </div>
              <div>
                <h2>評価したい点</h2>
                <p>・サービスのコンセプトを考えるところからのオ
                  リジナルサービスであり、バックを含んだ全体的
                  な機能、デザインを担当し着手からサービスの
                  ２/３を占める部分を担当し１ヶ月ほどで大方実装した点
                </p>
              </div>
              <div>
                <h2>使用技術
                </h2>
                <p>・React.js, Redux, Material-UI, JavaScript, html,
                  css, Firebase, Git
                </p>
              </div>
            </div>
          </section>
          <section className={styles.projectFrame}>
            <div className={styles.projectFrameSet}>
              <video src="/video/promoVideo.mp4" controls className={styles.videoFrame}></video>
            </div>
            <div className={styles.projectDiscription}>
              <div>
                <h2>サービス名</h2>
                <p>・Promo(プロモ)</p>
              </div>
              <div>
                <h2>概要</h2>
                <p>・Webアプリ</p>
                <p>・企業に関する知識や資金を募ることができるプラ
                  ットフォームアプリ。知識はオンラインフリーマー
                  ケット型。資金はクラウドファンディング型で募る
                  ことができる。</p>
              </div>
              <div>
                <h2>機能</h2>
                <p>・Sign up, Sign in, Sign out, Password Reset,
                  プロフィール設定, 案件投稿, 案件削除, 購入時のトランザクシ
                  ョン処理, チェックリスト, アプリ内通知など</p>
              </div>
              <div>
                <h2>制作期間</h2>
                <p>・約１ヶ月＋現在進行中（追加機能制作）</p>
              </div>
              <div>
                <h2>制作人数</h2>
                <p>・２人</p>
              </div>
              <div>
                <h2>担当</h2>
                <p>・全デザイン、オンラインフリーマーケット全担当。
                  （クラウドファンディングの実装はもう一人の担当）
                </p>
              </div>
              <div>
                <h2>評価したい点</h2>
                <p>・サービスのコンセプトを考えるところからのオ
                  リジナルサービスであり、バックを含んだ全体的
                  な機能、デザインを担当し着手からサービスの
                  ２/３を占める部分を担当し１ヶ月ほどで大方実装した点
                </p>
              </div>
              <div>
                <h2>使用技術
                </h2>
                <p>・React.js, Redux, Material-UI, JavaScript, html,
                  css, Firebase, Git
                </p>
              </div>
            </div>
          </section>
          <section className={styles.projectFrame}>
            <div className={styles.projectFrameSet}>
              <video src="/video/promoVideo.mp4" controls className={styles.videoFrame}></video>
            </div>
            <div className={styles.projectDiscription}>
              <div>
                <h2>サービス名</h2>
                <p>・Promo(プロモ)</p>
              </div>
              <div>
                <h2>概要</h2>
                <p>・Webアプリ</p>
                <p>・企業に関する知識や資金を募ることができるプラ
                  ットフォームアプリ。知識はオンラインフリーマー
                  ケット型。資金はクラウドファンディング型で募る
                  ことができる。</p>
              </div>
              <div>
                <h2>機能</h2>
                <p>・Sign up, Sign in, Sign out, Password Reset,
                  プロフィール設定, 案件投稿, 案件削除, 購入時のトランザクシ
                  ョン処理, チェックリスト, アプリ内通知など</p>
              </div>
              <div>
                <h2>制作期間</h2>
                <p>・約１ヶ月＋現在進行中（追加機能制作）</p>
              </div>
              <div>
                <h2>制作人数</h2>
                <p>・２人</p>
              </div>
              <div>
                <h2>担当</h2>
                <p>・全デザイン、オンラインフリーマーケット全担当。
                  （クラウドファンディングの実装はもう一人の担当）
                </p>
              </div>
              <div>
                <h2>評価したい点</h2>
                <p>・サービスのコンセプトを考えるところからのオ
                  リジナルサービスであり、バックを含んだ全体的
                  な機能、デザインを担当し着手からサービスの
                  ２/３を占める部分を担当し１ヶ月ほどで大方実装した点
                </p>
              </div>
              <div>
                <h2>使用技術
                </h2>
                <p>・React.js, Redux, Material-UI, JavaScript, html,
                  css, Firebase, Git
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </Layout>
  )
}