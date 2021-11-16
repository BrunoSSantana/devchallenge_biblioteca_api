<h1 align="center">
	<img alt="Logo" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width="200"/>
</h1>

<h3 align="center">
  Biblioteca Backend - <a href="https://www.devchallenge.com.br">DevChallenge</a>
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/BrunoSSantana/devchallenge_biblioteca_api">

  <a href="https://www.linkedin.com/in/bruno-santanas/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Bruno%20Santana-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/BrunoSSantana/devchallenge_biblioteca_api">
  
  <a href="https://github.com/BrunoSSantana/devchallenge_biblioteca_api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/BrunoSSantana/devchallenge_biblioteca_api">
  </a>
  
  <a href="https://github.com/BrunoSSantana/devchallenge_biblioteca_api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/BrunoSSantana/devchallenge_biblioteca_api">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/BrunoSSantana/devchallenge_biblioteca_api">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-references">References</a>
</p>

## 👨🏻‍💻 About the project

> Repository created from the [biblioteca-backend](https://github.com/devchallenge-io/biblioteca-backend) challenge made in by the [DevChallenge community](https://github.com/devchallenge-io).

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Biblioteca%20Dev%20Challenge&uri=https%3A%2F%2Fraw.githubusercontent.com%2FBrunoSSantana%2Fdevchallenge_biblioteca_api%2Fmaster%2Fbiblioteca-dev-challenge.json)

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

#### Clone the project and access the folder

**Clone by HTTPS:**

```bash
$ git clone https://github.com/BrunoSSantana/devchallenge_biblioteca_api.git && cd devchallenge_biblioteca_api
```

**Clone by GitHub CLI:**

```bash
$ gh repo clone BrunoSSantana/devchallenge_biblioteca_api
```

**Follow the steps below**

### Backend

```bash
# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name project-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=project -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Make sure the keys in '.env' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Bruno Santana 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/bruno-santanas/) 

## References
- [Template Readme By Elias Gabriel](https://github.com/EliasGcf/readme-template)
- [DevChallenge](https://github.com/Lorenalgm/DevChallenge)
- [Biblioteca-Backend](https://github.com/devchallenge-io/biblioteca-backend)
