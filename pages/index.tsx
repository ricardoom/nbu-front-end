import type { NextPage } from 'next';
import { getClient } from '../lib/sanity.server'
import { PortableText } from '@portabletext/react';
import { homePageContentQuery, indexQuery } from '../lib/queries'
import SiteTitle from '../components/SiteTitle';
import SiteHead from '../components/SiteHead';
import HeroPost from '../components/hero-post';
import Meta from '../components/meta';
import Footer from '../components/footer'
const IndexPage: NextPage = ({ data, allPosts }: any) => {
  const heroPost = allPosts[0];
  return (
    <>
      <SiteHead />
      <Meta />
      <SiteTitle />
      <main className='[ center ]'>
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
      <Footer />
    </>
  );
};

export default IndexPage;
// TODO: research the proper way to do this. It feels kludgy to run the getClient function twice. Is the asynchrony working correctly can I kick those off before getStaticProps runs and have it cached or something?
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