
# Native Bound Unbound Frontend

This project is built on [Next.js](https://nextjs.org/), [Sanity.io](https://www.sanity.io/), [Sass](https://sass-lang.com) and [Open Props](https://open-props.style/)

This repository is the Next JS front end, which handles all the page rendering, routing and layout.

## Getting Setup

You'll also need to clone the Sanity.io CMS repo for this project at [nbu-cms](https://github.com/ricardoom/nbu-cms)

To get started you will need to have both the front end (this repo) and look over the [Readme.md](https://github.com/ricardoom/nbu-cms/blob/main/README.md) and follow those instructions. Its helpful to have the two terminal windows side by side to keep an eye on the current status of each.

How to get credentials: email the maintainers of the project

Set up environment variables

Kick the Sanity studio off, and then run the frontend:

```bash
pnpm run dev

or

npm run dev
```

Open a browser and [http://localhost:7890](http://localhost:7890) and see the project.

While you are running the dev project, you can make changes and see them reflected in the browser.

### Deploying

Deploy to Cloudflare / Vercel / Netlify (TBD)

### Contributing

Guidlines for contributing to this project

Policy for pull requests

## Change Log

### v.0.0.1

- Project Kick off, and setup.

- TypeScript is used, but not completely and not as strictly as it should be

- Building out basic blog features with Sanity

- Basic Styling frame work or helper system: Open Props

- Some NPM projects of note:

  - [classnames](https://www.npmjs.com/package/classnames)

  - [Open Props](https://open-props.style/)
