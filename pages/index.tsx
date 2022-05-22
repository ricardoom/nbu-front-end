import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';


const IndexPage: NextPage = ({ data }: any) => {
  return (
    <>
      <header>
        <h1>{data.homepage.title}</h1>
      </header>
      <main>
        <h2>{data.homepage.subtitle}</h2>
        <PortableText
          value={data.homepage.body}
        />
      </main>
    </>
  );
};

export default IndexPage;

const client = createClient({
  projectId: 'vfd9jugo', // This stuff should be abstracted no?
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export async function getStaticProps() {
  const pets: any[] = await client.fetch(`*[_type == 'pet']`);
  const homepage = await client.fetch(`*[_type == "homepage"][0] {
    title,
    subtitle,
    body,
  }`
  );

  const data = { homepage, pets };
  return {
    props: {
      data
    },
    revalidate: 1,
  };
}