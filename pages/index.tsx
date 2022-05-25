import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity.server'
import { usePreviewSubscription } from '../lib/sanity'
import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { config } from '../lib/config';
import SiteHead from '../components/SiteHead';
import SiteTitle from '../components/ SiteTitle'


const IndexPage: NextPage = ({ data }: any) => {
  return (
    <>
      <SiteHead />
      <SiteTitle />
      <main>
        <PortableText
          value={data.homepage.body}
        />
      </main>
    </>
  );
};

export default IndexPage;

// const client = createClient(config);

export async function getStaticProps() {
  const query = groq`*[_type == "homepage"][0] {
    body,
    }`;
  const homepage: any[] = await getClient().fetch(query);

  const data = { homepage };
  return {
    props: {
      data
    },
    revalidate: 1, // TODO: look into what this line is doing
  };
}