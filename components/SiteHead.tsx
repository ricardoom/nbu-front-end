import Head from "next/head"
import { TITLES } from '../lib/constants';

//TODO: get the <Meta> content attribute controlled at Sanity level?
function SiteHead() {
  return (
    <Head>
      <title>{TITLES.title}</title>
      <meta name="description" content="" /> 
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SiteHead
