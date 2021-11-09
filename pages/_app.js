// 全体にかけたいcssがある場合はglobal.css このファイルのみ適応できる
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}