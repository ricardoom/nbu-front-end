import Head from "next/head"

//TODO: get the <Meta> content attribute controlled at Sanity level?
function SiteHead() {
  return (
    <Head>
      <title>Native Bound Unbound</title>
      <meta name="description" content="" /> 
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SiteHead
