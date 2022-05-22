import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { config } from '../lib/config';

const IndexPage: NextPage = ({ data }: any) => {
  return (
    <>
      <header>
        <h1>{data.homepage.title}</h1>
        <h2>{data.homepage.subtitle}</h2>
      </header>
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
  const pets: any[] = await client.fetch(`*[_type == 'pet']`);
  const homepage: any[] = await client.fetch(`*[_type == "homepage"][0] {
    title,
    subtitle,
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