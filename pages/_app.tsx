// 全体にかけたいcssがある場合はglobal.css このファイルのみ適応できる
import '../styles/global.css'
import { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

