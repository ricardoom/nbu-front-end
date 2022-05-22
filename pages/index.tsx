import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import SiteHead from '../components/SiteHead';
import SiteTitle from '../components/ SiteTitle'
import { config } from '../lib/config';

const IndexPage: NextPage = ({ data }: any) => {
  return (
    <>
     <SiteHead />
      {/* <header>
        <h1>{data.homepage.title}</h1>
        <h2>{data.homepage.subtitle}</h2>
      </header> */}
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


const client = createClient(config);

export async function getStaticProps() {
  const homepage: any[] = await client.fetch(`*[_type == "homepage"][0] {
    body,
    }`
  );

  const data = { homepage };
  return {
    props: {
      data
    },
    revalidate: 1, // TODO: look into what this line is doing
  };
}