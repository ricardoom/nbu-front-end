import Head from "next/head"
import { META, TITLES } from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <meta name="description" content="" />
      {/* Twitter */}
      <meta name="twitter:card" content={META.description} key="twcard" />
      <meta name="twitter:creator" content={META.twitterHandle} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={META.prodURL} key="ogurl" />
      <meta property="og:image" content={META.previewImage} key="ogimage" />
      <meta property="og:site_name" content={TITLES.title} key="ogsitename" />
      <meta property="og:title" content={TITLES.title} key="ogtitle" />
      <meta property="og:description" content={META.description} key="ogdesc" />
    </Head>
  );
}