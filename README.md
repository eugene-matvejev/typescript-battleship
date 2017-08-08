
[circle.ci-master-badge]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/tree/master.svg?style=svg
[circle.ci-master-link]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/tree/master
[codecov.io-master-badge]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/branch/master/graph/badge.svg
[codecov.io-master-link]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/branch/master

[circle.ci-heroku-badge]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/tree/heroku.svg?style=svg
[circle.ci-heroku-link]: https://circleci.com/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/tree/heroku
[codecov.io-heroku-badge]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/branch/heroku/graph/badge.svg
[codecov.io-heroku-link]: https://codecov.io/gh/eugene-matvejev/battleship-game-gui-vanilla-typescript/branch/heroku

|                       | master                                                         | heroku
|---                    |---                                                             |---
| __compilation__       |
| _< Circle CI >_ TSC   | [![build][circle.ci-master-badge]][circle.ci-master-link]      | [![build][circle.ci-heroku-badge]][circle.ci-heroku-link]
| _< Circle CI >_ LESSC | [![build][circle.ci-master-badge]][circle.ci-master-link]      | [![build][circle.ci-heroku-badge]][circle.ci-heroku-link]
| __coverage__          |
| _< codecov.io >_      | [![coverage][codecov.io-master-badge]][codecov.io-master-link] | [![coverage][codecov.io-heroku-badge]][codecov.io-heroku-link]

other CI engines reports _[on master]_

[![travis-build-status-master](https://travis-ci.org/eugene-matvejev/battleship-game-gui-vanilla-typescript.svg?branch=master)](https://travis-ci.org/eugene-matvejev/battleship-game-gui-vanilla-typescript)
[![codeship-build-status-master](https://app.codeship.com/projects/ed12aa00-33e7-0134-0af7-7e8c04437b1f/status?branch=master)](https://app.codeship.com/projects/164872)

# Battleship Game GUI on vanilla TypeScript

GUI for https://github.com/eugene-matvejev/battleship-game-api

__DEMO__ : https://battleship-game-gui-vanila-typescipt.herokuapp.com/ [GUI]

##### THIS IS SPARE TIME PROJECT, WORK IN PROGRESS! HIGHLY EXPERIMENTAL!!!
#### project purpose:
 * try out "cutting edge" technologies and approaches such as TypeScript, ES6 and Continuous Integration|Deployment
 * try out single-page-application [SPA] aproach
 * try out cross-browser requests
 * deliver preview about my technical knowledge before the job interview

#### game cheat-code:
_purpose: easier manual testing_
* AI player have only one ship, which is one-cell ship which and located at __B2__ cell
  * if you will hit __B2__ cell - you will win

# software requirements
 * TypeScript 2.0+ Compiler [TSC]
 * LESS Compiler
 * node.js v6.9+
 * npm v3.8+ or yarn v0.21

# technology stack
### key technologies:
 * TypeScript 2.0
 * JavaScript ES6 [ECMAScript6]
 * LESS
 * CSS3
 * Twitter Bootstrap 3
 * jQuery 2
 * yarn
 * npm

### used patterns:
 * MVC
 * Builder
 * Delegation
 * Registry
 * Event Dispatcher
 * Dependency Injection

# workflow
 * new functionality is added into master branch only by pull requests
 * result of each pull request is ready-to-use release, using Continuous Delivery principles
 * pull requests are named using semantic visioning
 * __gitflow__:
   * master branch: stable, contains release-ready source
   * heroku branch: reflects current deployed app at heroku (prototype of Continuous Delivery|Deployment)
   * prototype_* branches contains new idea [merged pull request of prototype branch is always next *major* version release]
   * pull requests follows [semantic vesion](http://semver.org/)

# how to install
 * `$ npm install` or if you have __yarn__ installed locally - `$ yarn install` will fetch local, and global dependencies:
   * node.js less compiler
   * node.js lite server

# static mode
 * `$ npm run generate:all` - will generate css|configs|js from the sources

### how to execute tests
 * WIP

### /etc/hosts
```
127.0.0.1        gui-vanilla-typescript.game.local
::1              gui-vanilla-typescript.game.local
```

### apache virtual host config:
```
<VirtualHost 127.0.0.1:80 ::1:80>
    DocumentRoot "%PROJECT_ROOT_DIRECTORY%/web"
    ErrorLog "%PROJECT_ROOT_DIRECTORY%/var/logs/apache_log"

    ServerName gui-vanilla-typescript.game.local
    ServerAlias gui-vanilla-typescript.game.local

    <Directory "%PROJECT_ROOT_DIRECTORY%/web">
        AllowOverride All
        Order Allow,Deny
        Allow from All

        Require all granted
    </Directory>
</VirtualHost>
```
