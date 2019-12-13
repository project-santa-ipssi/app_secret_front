# Portail DaD - FrontEnd Source Code

## Description
Portail DaD web application for supervising DAD activities

## Server config
    - Hostname: BILIAPA12.dom101.intres
    - Os: Redhat 7
    - Web Server: Apache Server
    - Listening port: 80 (default port for http)
    - Config location of Apache: /etc/httpd/conf/httpd.conf
    - Path to dist directory: /var/www/
    - Check service health: systemctl status httpd

## Install node
    $ install at least node v10.10 from https://nodejs.org/en/
    $ node -v (check for version)

## Set Up development environment (windows 10)

    $ git clone https://B0023696@bitbucket-groupe.hpr.f.bbg/scm/homologationdata/portail_frontend.git
    $ cd portail_frontend
    $ npm install  (generate node_modules folder)
    $ npm serve 

## Add Corporate Registry

    $ npm set registry http://picnex000.dom101.mapres:8081/repository/g-npm-proxy/

## Unit Tests

    $ npm run lint (with tslint)
    $ npm run lint:fix (fix linting errors)    
    $ npm run test
    $ npm run test:coverage
    $ npm run e2e
    
## Documentation of source code

    $ npm run docs:serve (serve locally doc code)
    $ npm run docs (generate dist folder for compodoc)
    $ npm run conventional-changelog (generate release note file for Release)

## Generate dist folder with webpack (test environment)

    $ npm run build

## Generate dist folder with webpack (prod environment)

    $ npm run build:prod
