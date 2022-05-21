import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { createClient } from 'next-sanity';

const IndexPage: NextPage = ({ data }: any) => {
  return (
    <>
      <header><h1>Pet Names</h1></header>
      <main>
        <h2>The names:</h2>
        {data.pets.length > 0 && (
          <ul>
            {data.pets.map((pet: any) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {!data.pets.length > 0 && <p>No pets cabron!</p>}
        {data.pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(data.pets, null, 2)}</pre>
          </div>
        )}
        {!data.pets.length > 0 && (
          <div>
            Data will show up when configuration is correct... pendejo!
          </div>
        )}
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
  const pets:any[] = await client.fetch(`*[_type == 'pet']`);
  const homepage = `*[_type == "homepage"][0] {
    title,
    subtitle,
    body,
  }`;

  const data = { homepage, pets };
  return {
    props: {
      data
    },
    revalidate: 1,
  }
}