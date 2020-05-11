# Personal Website

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with Github & Netlify
- A contact form protected by Google Recaptcha
- Functional components with React Hooks!
- Styles with Styled Components and Bulma
- Icons from Font Awesome (using Fontello)
- ~~Fetches your Github pinned projects with most stars (You could customize this if you wish)~~

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
|   └── resume              # Resume content as object
├── src
│   └── assets              # Assets
│   │   │── fontello          # files needed for icon font
│   │   │── illustrations     # illustrations from (undraw.co) and originals
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

### Online
1. Create a Netlify project
1. Create an account at [Formik](https://formik.com/) and grab your form endpoint url ~~> might move to Netlify
 forms?~~
1. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
1. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
1. Add them to your Netlify project as environment variables

- Formik form endpoint
- Google recaptcha public key
- Github token


### Locally

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh)
1. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
1. Run `cp .env.development.template .env.development`
1. Run `npm install && npm run start`

### Clean the cache
This removes the `.cache/` & `public/` folders

```bash
npm run reset
```

## Built with

- Gatsby
- React & GraphQL
- Formik
- Google recaptcha
- IntelliJ
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)
- Using [this](https://github.com/smakosh/gatsby-portfolio-dev/) starter and [this project](https://github.com/jcoelho93/personal-website) as inspiration

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/papotte/personal-website)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Rossana Bermudez](https://github.com/papotte) 

## Support

If you love this Gatsby template and want to support me, you can do so through my GitHub profile.
