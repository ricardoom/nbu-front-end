import Image from 'next/image';
import { urlFor } from '../lib/sanity';

interface ImageProps {
  alt: string,
  caption: string,
  image: any,
  src: string,
}

// export default function blogImage({alt, caption, image:source}: ImageProps) {
//   const image = source ? (
//     <div>
//       <Image alt={alt} src={urlFor(source).url } />
//     </div>
//   ) : (
//     <div>No Image cabron...</div>
//   );

//   return (
//     <div className='[ blog-image ]'>
//       {image}
//     </div>
//   )
// };


export const blogImage = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        console.log('there is no value being passed...')
        return null
      }
      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}



