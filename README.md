# Backbone_Course
URL-Shortener using NodeJS, ExpressJS, EJS, MongoDB, PassportJs.

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt-get install nodejs
      $ sudo apt-get install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
---

## Install

    $ git clone https://github.com/Avirup-301294/Backbone_Course
    $ cd backbone_course
    $ npm install

## Configure app

Create `.env` file at project root directory then edit it with your settings. You will need:

- MongoURI;
- baseURL;

## Running the project

    $ npm start