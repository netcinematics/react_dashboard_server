# react_dashboard_server

## GOAL: ai minter !

## STEPS to run dashboard

> npm install

> npm run start:dashboard
> npm run start:server

> subscribe to service on rapidapi to test OpenAi (for example)

> k-e-y in e-n-v

## STEPS to create fullstack dashboard

git clone https://github.com/netcinematics/react_dashboard_server.git

## frontend

> npm run start:dashboard
    "start:dashboard": "react-scripts start",

### frontend SETUP

> https://rapidapi.com/collection/ai-based-apis

> npx create-react-app react_dashboard_server  

> npm install axios

 - axios used by both React and Node.

### DEPLOY-SETUP

> npm install gh-pages --save-dev
https://www.pluralsight.com/guides/deploying-github-pages-with-create-react-app
- package.json homepage and name need to match.
-   "homepage": "https://netcinematics.github.io/react_dashboard_server/",
-   "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
> npm run deploy
- github branch: gh-pages, folder: / (root)

-- DEPLOY:
> npm run deploy

-- LIVE:
https://netcinematics.github.io/react_dashboard_server/

## backend

> npm i express axios dotenv cors

> npm i nodemon
> npm run start:server
    "start:server": "nodemon nodeserver.js",

### DEPLOY SETUP

vercel.json...
https://jonathans199.medium.com/deploy-node-js-express-api-to-vercel-dbf4461795a5
- login, connect vercel to github
- vercel, new project connect to repo
- setup: other ./ 
- add E N V V A R S
> DEPLOY btn   (takes a while to update)

> REMEMBER: dev / prod urls
- dev:    http://localhost:8008
- devapi: http://localhost:8008/news
- prod:   https://netcinematics.github.io/react_dashboard_server/
- prodapi:https://node-dashboard-server.vercel.app/news

> REMEMBER: npm run deploy

# OpenAI API

> $ npm install openai

## REFERENCE
this code, is modified version of tutorial by Ania Kubow (star).
https://www.youtube.com/watch?v=_itMdiSc0KI

