import { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/meta'
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <link rel="stylesheet" href="https://use.typekit.net/nci1ctu.css"/>
      </Head>
      <body className='[ wrapper ]'>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
