
import { groq } from 'next-sanity'

import Image from 'next/image';
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient, sanityClient } from '../../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import { allSlugsQuery } from '../../lib/queries';
import SiteHead from '../../components/SiteHead';
import SiteTitle from '../../components/SiteTitle';
import Date from '../../components/date';
import titles from '../../styles/component/Title.module.scss';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const blogImageInline = {
  types: {
    image: ({ value }) => {
      // console.log(urlFor(value));
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <>
          <Image
            alt={value.alt || ' '}
            loading='lazy'
            layout='intrinsic'
            width={475}
            height={700}
            src={urlFor(value).auto('format').url()}
          />
          <p>{value.caption}</p>
        </>
      )
    }
  }
}

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}

/**
 * Makes Next.js aware of all the slugs it can expect at this route
 *
 * See how we've mapped over our found slugs to add a `/` character?
 * Idea: Add these in Sanity and enforce them with validation rules :)
 * https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
 */
export async function getStaticPaths() {
  const pages = await getClient().fetch(allSlugsQuery)

  return {
    paths: pages.map((slug) => `/posts/${slug}`),
    fallback: true,
  }
}

/**
 * Fetch the data from Sanity based on the current slug
 *
 * Important: You _could_ query for just one document, like this:
 * *[slug.current == $slug][0]
 * But that won't return a draft document!
 * And you get a better editing experience 
 * fetching draft/preview content server-side
 *
 * Also: Ignore the `preview = false` param!
 * It's set by Next.js "Preview Mode" 
 * It does not need to be set or changed here
 */
export async function getStaticProps({ params, preview = false }) {
  const query = groq`*[_type == "post" && slug.current == $slug]`
  // const test = groq`*[_type == "post"]`
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(query, queryParams)

  // Escape hatch, if our query failed to return data
  if (!data) return { notFound: true }

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview)

  return {
    props: {
      // Pass down the "preview mode" boolean to the client-side
      preview,
      // Pass down the initial content, and our query
      data: { page, query, queryParams }
    }
  }
}

/**
 * The `usePreviewSubscription` takes care of updating
 * the preview content on the client-side
 */
export default function Page({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  })

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview)

  // Notice the optional?.chaining conditionals wrapping every piece of content? 
  // This is extremely important as you can't ever rely on a single field
  // of data existing when Editors are creating new documents. 
  // It'll be completely blank when they start!
  return (
    <>
      <SiteHead />
      <SiteTitle />
      <main className='[ center ]'>
        {page?.title && <h3 className={titles.blogTitle}>{page?.title}</h3>}
        {page?.author && <p className='[ blog author ]'>{page?.author}</p>}
        {page?.date && <p className='[ blog date ]'>
          <Date dateString={page?.date} />
        </p>}
        {page?.content && <PortableText value={page.content} components={blogImageInline}></PortableText>}
      </main>
    </>
  )
}