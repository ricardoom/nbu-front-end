/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
// import { urlFor } from '../lib/sanity';
import { getClient, sanityClient } from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';



interface ImageProps {
  alt: string,
  caption: string,
  image: any,
  src: string,
}

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const blogImageInline = {
  types: {
    content: ({ value }: JSX.Element) => {
      return <p className='baba'>{value}</p>
    },
    image: ({ value }: any) => {
      console.log(urlFor(value));

      if (!value?.asset?._ref) {
        return null
      }
      return (
        <>
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).auto('format').url()}
        />
        <p>{value.caption}</p>
        </>
      )
    }
  }
}

