# Multi Open API
This repository consists of the source code for the **Multi Open API**. It is  a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<br><br>

- [Multi Open API](#multi-open-api)
  - [Getting Started](#getting-started)
  - [Environment Setup](#environment-setup)
  - [IDE Setup](#ide-setup)
  - [Directory Structure](#directory-structure)
  - [Design System](#design-system)
  - [Contributing](#contributing)
  - [Learn More](#learn-more)

## Getting Started

First, install the dependencies and run the development server(s):

```bash
# To install dependencies
npm install

# To start the NextJS development server with hot reload
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
<br><br>

## Environment Setup
1. [Node.js](https://nodejs.org/en/) - v14.16.0
2. [NPM](https://www.npmjs.com/get-npm) - v7.7.6. Install with NodeJs
3. [git](https://git-scm.com/)
<br><br>
## IDE Setup
Usage of [Visual Studio Code](https://code.visualstudio.com/download) as an IDE is highly recommended. Please ensure that the following VS Code extensions are installed:

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - For linting
2. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - For formatting
3. [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) - Unit Testing
4. [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) - Validating NPM package.json
<br><br>

## Directory Structure
```bash
.
|-- .next
|-- coverage
|-- node_modules
|-- public
|-- src
    |-- components
    |-- hooks
    |-- layouts
    |-- page-components
    |-- pages
    |-- styles
|-- .babelrc
|-- .eslintrc
|-- .gitignore
|-- .prettierrc
|-- jest.config.js
|-- next-env.d.ts
|-- next.config.js
|-- package-lock.json
|-- README.md
|-- tsconfig.json
```

1. `.next`: This directory contains all the build files from `npm run build`. This is .gitignore-ed and will be generated before building the docker image.
2. `coverage`: This directory contains the files generated when jest's coverage flag is enabled (it uses clover under the hood). This is not checked in.
3. `node_modules`: What more can we say? This is also not checked in.
4. `public`: This directory contains the static assets used for the frontend app, e.g. fonts, images, favicon.ico. Note that if you are trying to upload a huge static asset like a video, use an external data store like S3. We don't want to bloat up the git repo.
5. `src/components`: All React components go in here. They are the building blocks of all pages and layouts.
6. `src/hooks`: Directory that contains all shared hooks. Currently not used yet. Read more about React hooks [here](https://reactjs.org/docs/hooks-intro.html)
7. `src/layouts`: Directory that contains all layouts (made up of components) for the whole frontend app.
8. `src/page-components`: Directory that contains all the various pages of the frontend app. This is used to make it flexible for developers to add page-specific functions/tests beside the page code itself without conflicting with NextJS.
9.  `src/styles`: All global stylesheets and antd less variable overrides come in here.
10. `.babelrc`: Babel config
11. `.eslintrc`: ESLint config. Please have ESLint installed in your IDE.
12. `gitignore`: Self explanatory
13. `prettierrc`: Prettier config. Please have Prettier installed in your IDE.
14. `jest.config.js`: Jest config.
15. `next-env.d.ts`: Environment file for NextJS application
16. `next.config.js`: NextJS Config file. More info [here](https://nextjs.org/docs/api-reference/next.config.js/introduction)
17. `package-lock.json`: Lockfile used by npm to prevent library installation conflicts. This needs to be checked in to git.
18. `package.json`: NPM package library definition.
19. `README.md`: This.
20. `tsconfig.json`: Typescript config file for this project.
    
## Design System
The design system used is [Ant Design](https://ant.design/).

## Contributing
Coming soon...
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!