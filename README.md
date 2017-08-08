# Battleship Game GUI
GUI for https://github.com/eugene-matvejev/battleship-game-api

__TDD tests__
* WIP

__BDD tests__
 * WIP

__test coverage__
 * WIP

__DEMO__ : https://battleship-game-gui-vanila-typescipt.herokuapp.com/ [GUI]

# Battleship Game GUI: Vanilla TypeScript
##### THIS IS SPARE TIME PROJECT, WORK IN PROGRESS! HIGHLY EXPERIMENTAL!!!
#### project purpose:
 * try out single-page-application [SPA] aproach
 * try out cross-browser requests
 * deliver preview about my technical knowledge before the job interview

#### game cheat-code:
_purpose: easier manual testing_
* AI player have only one ship, which is one-cell ship which and located at __B2__ cell
 * if you will hit __B2__ cell - you will win

# software requirements
* TypeScript Compiler [TSC]
* node.js v6.9+
* npm v3.8+

# technology stack
### key technologies:
 * TypeScript
 * JavaScript ES6 [ECMAScript6]
 * CSS3
 * LESS
 * jQuery 2
 * Twitter Bootstrap 3

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
 * npm install
 * typings install
 * tsc

### how to execute tests
 * WIP

### /etc/hosts
```
127.0.0.1        gui.game.local
::1              gui.game.local
```

### apache virtual host config:
```
<VirtualHost 127.0.0.1:80 ::1:80>
    DocumentRoot "%PROJECT_ROOT_DIRECTORY%/web"
    ErrorLog "%PROJECT_ROOT_DIRECTORY%/var/logs/apache_log"

    ServerName gui.game.local
    ServerAlias gui.game.local
    <Directory "%PROJECT_ROOT_DIRECTORY%/web">
        AllowOverride All
        Order Allow,Deny
        Allow from All

        # AllowOverride none
        Require all granted
    </Directory>
</VirtualHost>
```
