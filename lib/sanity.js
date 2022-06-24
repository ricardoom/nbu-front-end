
import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity';
import {createImageUrlBuilder, imageUrlBuilder} from '@sanity/image-url';
import { config } from './config';
import sanityClient from './sanity.server';

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
// export const urlFor = (source) => createImageUrlBuilder(sanityClient).image(source);

// const builder = imageUrlBuilder(sanityClient);
// const builder = createImageUrlBuilder(sanityClient);

// export function urlFor(source) {
//   return builder.image(source);
// }

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);



