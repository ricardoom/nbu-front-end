import type { NextPage } from 'next';
// TODO: Clean up commented code
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import { groq } from 'next-sanity'
// import { config } from '../lib/config';
// import { createClient } from 'next-sanity';
// import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { PortableText } from '@portabletext/react';
import { homePageContentQuery, indexQuery } from '../lib/queries'
import SiteTitle from '../components/SiteTitle';
import SiteHead from '../components/SiteHead';
import HeroPost from '../components/hero-post';



const IndexPage: NextPage = ({ data, allPosts }: any) => {
  const heroPost = allPosts[0];
  return (
    <>
      <SiteHead />
      <SiteTitle />
      <main>
        <PortableText
          value={data.homepage.body}
        />
        {heroPost && (
            <HeroPost
              title={heroPost.title}
              // coverImage={heroPost.coverImage}
              date={heroPost?.date}
              author={heroPost?.author}
              slug={heroPost.slug}
              excerpt={heroPost?.excerpt}
            />
          )}
      </main>
    </>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const homepage: any[] = await getClient().fetch(homePageContentQuery);
  const allPosts: any[] = await getClient().fetch(indexQuery)
  const data = { homepage };
 
  
  return {
    props: {
      data, allPosts
    },
    revalidate: 1, // TODO: look into what this line is doing
  };
}