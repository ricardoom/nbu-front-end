// Constants
// Titles, Authors, ...

interface BaseProps {
  readonly title?: string,
  readonly subtitle?: string,
  readonly description?: string
  readonly twitterHandle?: string,
  readonly devURL?: string,
  readonly prodURL?: string,
  readonly previewImage?: string, 
  readonly siteName?: string, 
  readonly pageTitle?:string
}

export const TITLES: BaseProps = {
  title: 'Native Bound Unbound',
  subtitle: 'Archive of Indigenous Slavery'
}

// Meta Descriptions etc...

export const META: BaseProps = {
  description: 'There is no way to measure the impact of slavery upon the Indigenous people of the Americas. Yet, it is known that many millions of people were captured and bound, each life worth remembering.',
  twitterHandle: '@nativeboundunbound',
  prodURL: 'https://nativeboundunbound.org',
  devURL: 'http://localhost:7890',
  previewImage: ''
}