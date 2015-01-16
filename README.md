# Jabber With Me - Client

This client connects to and communicates with the specified server that is running the [Jabber With Me API](https://github.com/drmyersii/jabber-with-me.api.git).

## Installation

### Production

### Development

When running in development, you will need a few things installed:

- [Bower](http://bower.io/) ```npm install -g bower```
- [Lineman](http://linemanjs.com/) ```npm install -g lineman```
- [PhantomJS](http://phantomjs.org/) for headless testing

```bash
# clone the repo
git clone https://github.com/drmyersii/jabber-with-me.client.git
cd jabber-with-me.client

# install node dependencies
npm install

# install bower dependencies
bower install

# run with lineman - go to http://localhost:8000 to view application
lineman run

# run tests
lineman spec

# build for production
lineman build
```
