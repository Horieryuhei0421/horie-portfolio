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
              <Link href="https://promo-e4daf.firebaseapp.com/">
                <a target="_blank">
                  <p className={styles.forApply}>こちらからアプリへ移動できます。</p>
                </a>
              </Link>
            </div>
            <div className={styles.projectDiscription}>
              <div>
                <h2>サービス名</h2>
                <p>・Promo(プロモ)</p>
              </div>
              <div>
                <h2>概要</h2>
                <p>・Webアプリケーション</p>
                <p>・企業に関する知識を募ることができるアプリケーション。今後の展開としては資金を募る機能を追加し、知識と資金を募ることができ、起業を促進する起業のためのプラットフォームアプリへの移行を検討。</p>
              </div>
              <div>
                <h2>機能</h2>
                <p>・Sign up, Sign in, Sign out, Password Reset,
                  プロフィール設定, 案件投稿, 案件削除, 購入時のトランザクシ
                  ョン処理,（気になる企業のチェックリスト、通知機能を準備中）</p>
              </div>
              <div>
                <h2>制作期間</h2>
                <p>・約１ヶ月＋現在進行中（追加機能制作）</p>
              </div>
              <div>
                <h2>制作人数</h2>
                <p>・1人</p>
              </div>
              {/* <div>
                <h2>担当</h2>
                <p>・全デザイン、オンラインフリーマーケット全担当。
                  （クラウドファンディングの実装はもう一人の担当）
                </p>
              </div> */}
              <div>
                <h2>見ていただきたい点</h2>
                <p>・サービスのコンセプトを考えるところからのオリジナルサービスであり、デザインを含むフロントサイドからバックサイドまでを含んだ全体的な機能を１ヶ月ほどで大方実装したスピード感。
                </p>
              </div>
              <div>
                <h2>使用技術
                </h2>
                <p>・JavaScript, React.js, Redux, Material-UI, Node.js html, css, Firebase, Git, GitHub
                </p>
              </div>
            </div>
          </section>
          <section className={styles.projectFrame}>
            <div className={styles.projectFrameSet}>
              <video src="/video/promoVideo.mp4" controls className={styles.videoFrame}></video>
              <Link href="https://ec-app-18bad.firebaseapp.com/">
                <a target="_blank">
                  <p className={styles.forApply}>こちらからアプリへ移動できます。</p>
                </a>
              </Link>
            </div>
            <div className={styles.projectDiscription}>
              <div>
                <h2>サービス名</h2>
                <p>・online shop ネコ</p>
              </div>
              <div>
                <h2>概要</h2>
                <p>・Webアプリケーション</p>
                <p>・ファッションオンラインショップ。1対n（複数）型のオンラインショップであり、店側は商品の出品等の管理を自由にできる。サイト乱用防止の為、出品商品の管理可能者は製作者のみに制限させていただいてます。</p>
              </div>
              <div>
                <h2>機能</h2>
                <p>・Sign up, Sign in, Sign out, Password Reset,
                  プロフィール設定, 商品投稿, 商品変更, 商品削除, カート機能, 購入時のトランザクション処理, 条件別商品表示</p>
              </div>
              <div>
                <h2>制作期間</h2>
                <p>・約2ヶ月</p>
              </div>
              <div>
                <h2>制作人数</h2>
                <p>・1人</p>
              </div>
              <div>
                <h2>見ていただきたい点</h2>
                <p>・オンラインショップでユーザーのUXの向上のために出品商品を「男性・女性」などの条件別の商品表示を実装。商品の詳細にてサイズ別に商品を選ぶことができるUXの柔軟性。
                </p>
              </div>
              <div>
                <h2>使用技術
                </h2>
                <p>・JavaScript, React.js, Redux, Material-UI, Node.js html, css, Firebase, Git, GitHub
                </p>
              </div>
            </div>
          </section>
          <section className={styles.projectFrame}>
            <div className={styles.projectFrameSet}>
              <video src="/video/promoVideo.mp4" controls className={styles.videoFrame}></video>
              <Link href="https://horie-portfolio.vercel.app/">
                <a target="_blank">
                  <p className={styles.forApply}>今ご覧いただいてるサイトになります。</p>
                </a>
              </Link>
            </div>
            <div className={styles.projectDiscription}>
              <div>
                <h2>サービス名</h2>
                <p>・堀江龍平のポートフォリオサイト</p>
              </div>
              <div>
                <h2>概要</h2>
                <p>・Webサイト</p>
                <p>・堀江龍平の個人情報・過去の制作物が見やすく掲示されているポートフォリオサイトになります。Githubにも載っていない実務経験の情報なども載っています。</p>
              </div>
              <div>
                <h2>制作期間</h2>
                <p>・約１週間</p>
              </div>
              <div>
                <h2>制作人数</h2>
                <p>・1人</p>
              </div>
              {/* <div>
                <h2>担当</h2>
                <p>・全デザイン、オンラインフリーマーケット全担当。
                  （クラウドファンディングの実装はもう一人の担当）
                </p>
              </div> */}
              <div>
                <h2>見ていただきたい点</h2>
                <p>・デザインと必要事項を最小限に絞った為見やすい構成になっている点。Next.js・TypaScriptのモダンな技術を積極的に取り入れていく姿勢。（TypeScriptへの書き換えは進行中です。）
                </p>
              </div>
              <div>
                <h2>使用技術
                </h2>
                <p>・TypeScript, JavaScript, React.js, Next.js, Node.js, html, css, Versel, Git, GitHub
                </p>
              </div>
            </div>
          </section>
          <section className={styles.projectFrame}>
            <div className={styles.projectFrameSet}>
              <video src="/video/promoVideo.mp4" controls className={styles.videoFrame}></video>
              <Link href="https://horie-portfolio.vercel.app/">
                <a target="_blank">
                  <p className={styles.forApply}>今ご覧いただいてるサイトになります。</p>
                </a>
              </Link>
            </div>
            <div className={styles.projectDiscription}>
              <div>
                <h2>サービス名</h2>
                <p>・堀江龍平のポートフォリオサイト</p>
              </div>
              <div>
                <h2>概要</h2>
                <p>・Webサイト</p>
                <p>・堀江龍平の個人情報・過去の制作物が見やすく掲示されているポートフォリオサイトになります。Githubにも載っていない実務経験の情報なども載っています。</p>
              </div>
              <div>
                <h2>制作期間</h2>
                <p>・約１週間</p>
              </div>
              <div>
                <h2>制作人数</h2>
                <p>・1人</p>
              </div>
              {/* <div>
                <h2>担当</h2>
                <p>・全デザイン、オンラインフリーマーケット全担当。
                  （クラウドファンディングの実装はもう一人の担当）
                </p>
              </div> */}
              <div>
                <h2>見ていただきたい点</h2>
                <p>・デザインと必要事項を最小限に絞った為見やすい構成になっている点。Next.js・TypaScriptのモダンな技術を積極的に取り入れていく姿勢。（TypeScriptへの書き換えは進行中です。）
                </p>
              </div>
              <div>
                <h2>使用技術
                </h2>
                <p>・TypeScript, JavaScript, React.js, Next.js, Node.js, html, css, Versel, Git, GitHub
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </Layout>
  )
}