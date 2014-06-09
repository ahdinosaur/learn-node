# learn-node

by [ahdinosaur](http://dinosaur.is)

## how to install node

- [nvm](https://github.com/creationix/nvm): node version manager
- [nodejs](http://nodejs.org): javascript interpreter
- [npm](http://npmjs.org): javascript package manager

first you'll need to make sure your system has a c++ compiler. For OSX, XCode will work, for Ubuntu, the build-essential and libssl-dev packages work.

```
git clone https://github.com/creationix/nvm.git ~/.nvm
source ~/.nvm/nvm.sh
nvm install 0.10
nvm use 0.10
nvm alias default 0.10
```

it's a good idea to put the 2nd line in your ~/.bashrc, ~/.zshrc, ~/.profile, etc to source nvm automatically upon login.

## curriculum

### intro

#### node simple.js

#### require('./lib.js')

#### require('lib')

#### npm init / node .

#### npm i --save lib
