# MEAN (MongoDB, Express, Angular, Node) Stack

# Project Initialization

* Before starting, ensure Node is installed on your system https://nodejs.org/en/download
* create a database on https://www.mongodb.com/en/atlas/database


## initialize the package.json file with default values: `npm init -y`

## install Express package `npm install express`

## install nodemon globally `npm install -g nodemon`

## install dotenv `npm install dotenv`

## install mongoDB driver `npm install mongodb`

## install mongoose driver `npm install mongoose`

## run the api `npm run dev`


* In package.json add "dev": nodemon server.js"
```
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
Run nodemon: `npm run dev`
```
PS C:\Users\marti\Desktop\MEAN\backend> npm run dev

> backend@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server is listening on port 3000
```