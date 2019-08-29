<p align="center">
<img src="logo.png" alt="logo"/>
<p align="center"><a href="https://travis-ci.org/ooade/NextSimpleStarter"><img src="https://travis-ci.org/ooade/NextSimpleStarter.svg?branch=master" alt="travis-ci"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter/badges"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/gpa.svg" alt="codeclimate-gpa-badge"/></a> <a href="https://codeclimate.com/github/ooade/NextSimpleStarter"><img src="https://codeclimate.com/github/ooade/NextSimpleStarter/badges/issue_count.svg" alt="codeclimate-issues-badge"/></a><br/>
<h3 align="center">Simple NextJS PWA boilerplate.</h3></p>
</p>

## Contents

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Deploy to Netlify](#deploy-to-netlify)

### Installation
> :information_source: This project is bootstrapped from [NextSimpleStarter](https://github.com/ooade/NextSimpleStarter.git) Repo.
Clone Repo:
```
git clone https://github.com/tdotholla/crowdround.git
cd crowdround
```

### Development Workflow

Start a live-reload development server:

```sh
yarn dev
```

or

```sh
npm run dev
```

Generate a production build:

```sh
yarn build
```

or

```sh
npm run build
```

### Deploy to Now

```sh
now dev
```

For production, update alias in the now.json ie `"alias": "crowdround.now.sh",`

```sh
now
```

### Deploy to Now/Heroku

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/tdotholla/crowdround)

<details>
	<summary>Heroku</summary>
	Just follow <a href="https://github.com/mars/heroku-nextjs">Mars's Guide</a> and you're good to go :clap:
</details>

### Deploy to Netlify

- On netlify, Click on new site from git.
- Select Cloned Repository.
- Choose VCS.
- Add build command `npm run export`.
- Add publish directory `out`.

### Contribution

To contribute to this project, email [theHilmar@gmail.com](mailto:thehilmar@gmail.com?subject=Contribute%20to%20Crowdround%20Project)

### License

MIT
